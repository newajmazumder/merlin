import type { CSSProperties } from 'react'
import homeFeaturesClarityHtml from '../legacy/home-features-clarity.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeFeaturesClarity() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeFeaturesClarityHtml }} />
}
