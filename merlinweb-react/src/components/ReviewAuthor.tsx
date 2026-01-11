import type { CSSProperties } from 'react'
import reviewAuthorHtml from '../legacy/review-author.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function ReviewAuthor() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: reviewAuthorHtml }} />
}
