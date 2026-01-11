import type { CSSProperties } from 'react'
import heroUsedByHtml from '../legacy/hero-used-by.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HeroUsedBy() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: heroUsedByHtml }} />
}
