import type { CSSProperties } from 'react'
import footerLinksDesktopHtml from '../legacy/footer-links-desktop.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterLinksDesktop() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerLinksDesktopHtml }} />
}
