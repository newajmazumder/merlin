import type { CSSProperties } from 'react'
import stepsHtml from '../legacy/steps.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function Steps() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: stepsHtml }} />
}
