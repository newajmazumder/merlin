import type { CSSProperties } from 'react'
import reviewDividerHtml from '../legacy/review-divider.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function ReviewDivider() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: reviewDividerHtml }} />
}
