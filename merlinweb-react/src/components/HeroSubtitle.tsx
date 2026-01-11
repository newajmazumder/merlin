import type { CSSProperties } from 'react'
import heroSubtitleHtml from '../legacy/hero-subtitle.html?raw'

export default function HeroSubtitle() {
  const wrapperStyle: CSSProperties = {
    display: 'contents',
  }

  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroSubtitleHtml }} />
}
