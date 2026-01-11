import type { CSSProperties } from 'react'
import heroCtaHtml from '../legacy/hero-cta.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HeroCta() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroCtaHtml }} />
}
