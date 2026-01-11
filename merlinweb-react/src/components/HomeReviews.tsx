import type { CSSProperties } from 'react'
import homeReviewsInnerHtml from '../legacy/home-reviews-inner.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function HomeReviews() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: homeReviewsInnerHtml }} />
}
