import type { CSSProperties } from 'react'
import footerDividerHtml from '../legacy/footer-divider.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterDivider() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerDividerHtml }} />
}
