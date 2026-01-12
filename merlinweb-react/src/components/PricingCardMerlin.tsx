import type { CSSProperties } from 'react'

const cardStyle: CSSProperties = {
  '--paper-radius': 'calc(2.5rem * var(--mantine-scale))',
  '--paper-shadow': 'var(--mantine-shadow-xs)',
  padding: 'calc(0rem * var(--mantine-scale))',
  maxWidth: 'calc(40rem * var(--mantine-scale))',
} as CSSProperties

const headerStyle: CSSProperties = {
  borderRadius: '2rem 2rem 0 0',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'calc(1rem * var(--mantine-scale))',
  background: '#eee',
}

const headerTextStyle: CSSProperties = {
  color: '#666',
  fontSize: 'calc(2rem * var(--mantine-scale))',
}

const stackStyle: CSSProperties = {
  '--stack-gap': 'calc(1.5rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  padding: 'calc(2rem * var(--mantine-scale))',
} as CSSProperties

export default function PricingCardMerlin() {
  return (
    <div
      className="m-e615b15f mantine-Card-root m-1b7284a3 mantine-Paper-root"
      data-with-border="true"
      style={cardStyle}
    >
      <div className="m-8bffd616 mantine-Flex-root __m__-«Rqrbevdb»" style={headerStyle}>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={headerTextStyle}>
          Merlin AI
        </p>
      </div>
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        <div id="react-pricing-card-merlin-items" />
      </div>
    </div>
  )
}
