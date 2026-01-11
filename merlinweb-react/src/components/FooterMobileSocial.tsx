import type { CSSProperties } from 'react'
import footerMobileSocialHtml from '../legacy/footer-mobile-social.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterMobileSocial() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerMobileSocialHtml }} />
}
