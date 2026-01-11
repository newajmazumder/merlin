import type { CSSProperties } from 'react'
import homeFeaturesTalkHtml from '../legacy/home-features-talk.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeFeaturesTalk() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeFeaturesTalkHtml }} />
}
