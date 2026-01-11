import type { CSSProperties } from 'react'
import footerLogoHtml from '../legacy/footer-logo.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterLogo() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerLogoHtml }} />
}
