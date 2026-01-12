import type { CSSProperties } from 'react'

const titleStyle: CSSProperties = {
  fontSize: 'calc(4rem * var(--mantine-scale))',
  textAlign: 'center',
}

const subtitleStyle: CSSProperties = {
  color: '#aaa',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  textAlign: 'center',
}

export default function PricingHeader() {
  return (
    <>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
        Pricing
      </p>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={subtitleStyle}>
        Hire your full-time, dedicated AI chief of staff for only $19 per month.
      </p>
    </>
  )
}
