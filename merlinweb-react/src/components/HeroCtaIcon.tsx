import type { CSSProperties } from 'react'
import heroCtaIconHtml from '../legacy/hero-cta-icon.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HeroCtaIcon() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroCtaIconHtml }} />
}
