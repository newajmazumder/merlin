import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  alignSelf: 'stretch',
} as CSSProperties

const copyrightStyle: CSSProperties = {
  marginTop: 'calc(2rem * var(--mantine-scale))',
  color: '#808080',
  fontSize: 'calc(1rem * var(--mantine-scale))',
  fontWeight: 400,
}

export default function FooterBlock() {
  return (
    <>
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        <div id="react-footer-press-row" />
        <div id="react-footer-desktop-social" />
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root mantine-visible-from-md" style={copyrightStyle}>
          <span id="react-footer-copyright" />
        </p>
      </div>
      <style data-mantine-styles="inline">
        {'.__m__-«R1bdivdb»{margin-left:calc(0rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R1bdivdb»{margin-left:auto;}}'}
      </style>
      <div id="react-footer-links-desktop" />
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        <style data-mantine-styles="inline">
          {'.__m__-«Rrrdivdb»{margin-left:calc(0rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Rrrdivdb»{margin-left:auto;}}'}
        </style>
        <div className="m-6d731127 mantine-Stack-root __m__-«Rrrdivdb» mantine-hidden-from-md" style={stackStyle}>
          <a className="footer_footerLink__HBhfp" href="/pricing">
            Pricing
          </a>
          <a className="footer_footerLink__HBhfp" href="/blog">
            Blog
          </a>
        </div>
        <a className="footer_footerLink__HBhfp" href="/privacy">
          Privacy policy
        </a>
        <a className="footer_footerLink__HBhfp" href="/terms">
          Terms of service
        </a>
        <div id="react-footer-mobile-social" />
      </div>
    </>
  )
}
