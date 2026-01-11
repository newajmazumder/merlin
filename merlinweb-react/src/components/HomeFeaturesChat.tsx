import type { CSSProperties } from 'react'
import homeFeaturesChatHtml from '../legacy/home-features-chat.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeFeaturesChat() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeFeaturesChatHtml }} />
}
