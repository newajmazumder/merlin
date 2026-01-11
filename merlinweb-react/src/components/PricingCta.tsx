import type { CSSProperties } from 'react'
import pricingCtaHtml from '../legacy/pricing-cta.html?raw'

export default function PricingCta() {
  const wrapperStyle: CSSProperties = {
    display: 'contents',
  }

  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingCtaHtml }} />
}
