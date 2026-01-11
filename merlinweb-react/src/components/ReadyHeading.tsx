import type { CSSProperties } from 'react'
import readyHeadingHtml from '../legacy/ready-heading.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function ReadyHeading() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: readyHeadingHtml }} />
}
