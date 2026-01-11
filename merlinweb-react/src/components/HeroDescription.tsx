import type { CSSProperties } from 'react'
import heroDescriptionHtml from '../legacy/hero-description.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HeroDescription() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroDescriptionHtml }} />
}
