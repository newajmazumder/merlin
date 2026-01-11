import type { CSSProperties } from 'react'
import youBuiltHtml from '../legacy/you-built.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function YouBuilt() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: youBuiltHtml }} />
}
