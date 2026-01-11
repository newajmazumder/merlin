import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const args = process.argv.slice(2)
const baseUrlArgIndex = args.indexOf('--base-url')
const baseUrlArg = baseUrlArgIndex >= 0 ? args[baseUrlArgIndex + 1] : undefined
const baseUrl = baseUrlArg ?? process.env.BASE_URL ?? 'http://localhost:5173/'
const viewport = { width: 1400, height: 900 }
const updateBaseline = args.includes('--update')
const fullPage = args.includes('--full-page')
const screenshotTimeout = Number(process.env.SCREENSHOT_TIMEOUT ?? 180000)

const baselineDir = path.resolve('visual-baseline')
const currentDir = path.resolve('visual-current')
const diffDir = path.resolve('visual-diff')
const baselinePath = path.join(baselineDir, 'home.png')
const currentPath = path.join(currentDir, 'home.png')
const diffPath = path.join(diffDir, 'home.png')

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true })
}

const readPng = (filePath) => PNG.sync.read(fs.readFileSync(filePath))

const main = async () => {
  ensureDir(baselineDir)
  ensureDir(currentDir)
  ensureDir(diffDir)

  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.addInitScript(() => {
    const style = document.createElement('style')
    style.textContent = '*{animation:none !important;transition:none !important;}'
    document.documentElement.appendChild(style)
  })
  await page.route('**/*', (route) => {
    const url = route.request().url()
    const isNextChunk = url.includes('/_next/static/chunks/')
    const isAnalytics = url.includes('googletagmanager') || url.includes('google-analytics')
    if (route.request().resourceType() === 'script' && (isNextChunk || isAnalytics)) {
      route.abort()
      return
    }
    route.continue()
  })
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 15000 })
  await page.evaluate(() => (document.fonts ? document.fonts.ready : Promise.resolve()))
  await page.waitForTimeout(1000)
  const clip = fullPage ? undefined : { x: 0, y: 0, width: viewport.width, height: viewport.height }
  await page.screenshot({ path: currentPath, fullPage, clip, timeout: screenshotTimeout })
  await browser.close()

  if (updateBaseline) {
    fs.copyFileSync(currentPath, baselinePath)
    console.log(`Baseline updated: ${baselinePath}`)
    return
  }

  if (!fs.existsSync(baselinePath)) {
    console.error(`Missing baseline: ${baselinePath}`)
    process.exit(1)
  }

  const baseline = readPng(baselinePath)
  const current = readPng(currentPath)

  if (baseline.width !== current.width || baseline.height !== current.height) {
    console.error('Screenshot size mismatch; update baseline.')
    process.exit(1)
  }

  const diff = new PNG({ width: baseline.width, height: baseline.height })
  const mismatched = pixelmatch(
    baseline.data,
    current.data,
    diff.data,
    baseline.width,
    baseline.height,
    { threshold: 0.1, includeAA: false },
  )

  const defaultMaxDiff = Math.round(baseline.width * baseline.height * 0.0003)
  const maxDiffPixels = Number(process.env.MAX_DIFF_PIXELS ?? defaultMaxDiff)

  if (mismatched > maxDiffPixels) {
    fs.writeFileSync(diffPath, PNG.sync.write(diff))
    console.error(`Visual regression detected (${mismatched} pixels): ${diffPath}`)
    process.exit(1)
  }

  if (mismatched > 0) {
    console.log(`Visual check passed with ${mismatched} pixels (max ${maxDiffPixels}).`)
    return
  }

  console.log('Visual check passed.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
