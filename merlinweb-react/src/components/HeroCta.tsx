import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'calc(1rem * var(--mantine-scale))',
  '--stack-align': 'center',
  '--stack-justify': 'center',
} as CSSProperties

const imageStyle: CSSProperties = {
  transform: 'translate(-1rem, 4rem)',
}

const buttonStyle: CSSProperties = {
  '--button-color': 'var(--mantine-color-white)',
  borderRadius: '10rem',
  padding: 'calc(0.5rem * var(--mantine-scale)) calc(1.5rem * var(--mantine-scale))',
  background: 'var(--mantine-color-black)',
  height: 'calc(4.5rem * var(--mantine-scale))',
} as CSSProperties

const linkStyle: CSSProperties = {
  color: '#ddd',
}

export default function HeroCta() {
  return (
    <div className="">
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        <img alt="Try merlin for free for 7 days" src="try merlin.svg" style={imageStyle} />
        <button
          className="mantine-focus-auto mantine-active m-77c9d27d mantine-Button-root m-87cf2631 mantine-UnstyledButton-root"
          data-with-right-section="true"
          style={buttonStyle}
          type="button"
        >
          <span className="m-80f1301b mantine-Button-inner">
            <span className="m-811560b9 mantine-Button-label">
              <a
                className="hover-text_hoverText__JouUr home_ctaText__xonxX"
                href="https://app.merlin.computer/auth"
                style={linkStyle}
                target="blank"
              >
                <span data-hover="Start free trial">
                  <span id="react-hero-cta-label" />
                </span>
              </a>
            </span>
            <span className="m-a74036a mantine-Button-section" data-position="right">
              <span id="react-hero-cta-icon" />
            </span>
          </span>
        </button>
      </div>
    </div>
  )
}
