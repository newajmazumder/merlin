import type { CSSProperties } from 'react'
import footerBlockHtml from '../legacy/footer-block.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterBlock() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerBlockHtml }} />
}
