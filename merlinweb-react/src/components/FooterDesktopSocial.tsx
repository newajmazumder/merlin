import type { CSSProperties } from 'react'
import footerDesktopSocialHtml from '../legacy/footer-desktop-social.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterDesktopSocial() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerDesktopSocialHtml }} />
}
