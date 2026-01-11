import type { CSSProperties } from 'react'
import heroTitleHtml from '../legacy/hero-title.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HeroTitle() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroTitleHtml }} />
}
