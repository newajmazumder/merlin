import type { CSSProperties } from 'react'
import pricingCtaIconHtml from '../legacy/pricing-cta-icon.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingCtaIcon() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCtaIconHtml }} />
}
