import type { CSSProperties } from 'react'
import footerPressRowHtml from '../legacy/footer-press-row.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterPressRow() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerPressRowHtml }} />
}
