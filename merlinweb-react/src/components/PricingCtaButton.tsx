import type { CSSProperties } from 'react'

const buttonStyle: CSSProperties = {
  '--button-color': 'var(--mantine-color-white)',
  borderRadius: '10rem',
  padding: 'calc(0.5rem * var(--mantine-scale)) calc(1.5rem * var(--mantine-scale))',
  background: '#eee',
  height: 'calc(4.5rem * var(--mantine-scale))',
} as CSSProperties

const labelWrapStyle: CSSProperties = {
  marginTop: 'calc(.5rem * var(--mantine-scale))',
}

const linkStyle: CSSProperties = {
  color: '#666',
}

export default function PricingCtaButton() {
  return (
    <button
      className="mantine-focus-auto mantine-active m-77c9d27d mantine-Button-root m-87cf2631 mantine-UnstyledButton-root"
      data-with-right-section="true"
      style={buttonStyle}
      type="button"
    >
      <span className="m-80f1301b mantine-Button-inner">
        <span className="m-811560b9 mantine-Button-label">
          <div className="" style={labelWrapStyle}>
            <a className="hover-text_hoverText__JouUr undefined" href="https://app.merlin.computer/auth" style={linkStyle} target="blank">
              <span data-hover="Make the switch to Merlin">
                <span id="react-pricing-cta-label" />
              </span>
            </a>
          </div>
        </span>
        <span className="m-a74036a mantine-Button-section" data-position="right">
          <span id="react-pricing-cta-icon" />
        </span>
      </span>
    </button>
  )
}
