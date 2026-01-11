import type { CSSProperties } from 'react'
import footerCopyrightHtml from '../legacy/footer-copyright.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function FooterCopyright() {
  return <span style={wrapperStyle} dangerouslySetInnerHTML={{ __html: footerCopyrightHtml }} />
}
