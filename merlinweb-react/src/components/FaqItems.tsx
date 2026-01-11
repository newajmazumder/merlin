import type { CSSProperties } from 'react'
import faqItemsHtml from '../legacy/faq-items.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FaqItems() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: faqItemsHtml }} />
}
