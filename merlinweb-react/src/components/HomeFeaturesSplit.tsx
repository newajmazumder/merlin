import type { CSSProperties } from 'react'
import homeFeaturesSplitHtml from '../legacy/home-features-split.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeFeaturesSplit() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeFeaturesSplitHtml }} />
}
