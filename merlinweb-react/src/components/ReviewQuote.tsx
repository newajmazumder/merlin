import type { CSSProperties } from 'react'
import reviewQuoteHtml from '../legacy/review-quote.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function ReviewQuote() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: reviewQuoteHtml }} />
}
