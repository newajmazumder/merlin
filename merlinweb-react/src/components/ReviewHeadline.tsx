import type { CSSProperties } from 'react'
import reviewHeadlineHtml from '../legacy/review-headline.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function ReviewHeadline() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: reviewHeadlineHtml }} />
}
