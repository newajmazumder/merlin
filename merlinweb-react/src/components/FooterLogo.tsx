import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  position: 'relative',
  display: 'block',
}

const logoStyle: CSSProperties = {
  width: '100%',
  marginTop: '4rem',
}

export default function FooterLogo() {
  return (
    <div style={wrapperStyle}>
      <img alt="merlin logo" src="logo.svg" style={logoStyle} />
    </div>
  )
}
