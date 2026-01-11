import type { CSSProperties } from 'react'
import homeFeaturesIntroHtml from '../legacy/home-features-intro.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeFeaturesIntro() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeFeaturesIntroHtml }} />
}
