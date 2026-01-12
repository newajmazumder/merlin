import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  alignSelf: 'stretch',
} as CSSProperties

export default function FooterLinksDesktop() {
  return (
    <div className="m-6d731127 mantine-Stack-root __m__-«R1bdivdb» mantine-visible-from-md" style={wrapperStyle}>
      <a className="footer_footerLink__HBhfp" href="/pricing">
        Pricing
      </a>
      <a className="footer_footerLink__HBhfp" href="/blog">
        Blog
      </a>
    </div>
  )
}
