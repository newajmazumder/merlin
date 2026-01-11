import type { CSSProperties } from 'react'
import pricingCtaButtonHtml from '../legacy/pricing-cta-button.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingCtaButton() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCtaButtonHtml }} />
}
