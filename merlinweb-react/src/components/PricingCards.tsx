import type { CSSProperties } from 'react'
import pricingCardsHtml from '../legacy/pricing-cards.html?raw'

export default function PricingCards() {
  const wrapperStyle: CSSProperties = {
    display: 'contents',
  }

  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCardsHtml }} />
}
