import type { CSSProperties } from 'react'
import pricingHeaderHtml from '../legacy/pricing-header.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function PricingHeader() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: pricingHeaderHtml }} />
}
