import type { CSSProperties } from 'react'
import pricingCardTraditionalHtml from '../legacy/pricing-card-traditional.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingCardTraditional() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCardTraditionalHtml }} />
}
