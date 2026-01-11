import type { CSSProperties } from 'react'
import pricingCardMerlinItemsHtml from '../legacy/pricing-card-merlin-items.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingCardMerlinItems() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCardMerlinItemsHtml }} />
}
