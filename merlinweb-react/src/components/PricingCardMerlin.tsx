import type { CSSProperties } from 'react'
import pricingCardMerlinHtml from '../legacy/pricing-card-merlin.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingCardMerlin() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCardMerlinHtml }} />
}
