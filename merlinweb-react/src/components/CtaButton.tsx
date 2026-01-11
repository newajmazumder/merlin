import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  marginInline: 'auto',
  marginTop: 'calc(8rem * var(--mantine-scale))',
}

const buttonStyle: CSSProperties = {
  '--spread': '90deg',
  '--shimmer-color': '#ffffff',
  '--radius': '100px',
  '--speed': '4s',
  '--cut': '0.2rem',
  '--bg': '#34C759',
  width: '100%',
} as CSSProperties

const labelStyle: CSSProperties = {
  color: 'var(--mantine-color-white)',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 600,
  letterSpacing: '-0.5px',
}

export default function CtaButton() {
  return (
    <div style={wrapperStyle}>
      <button className="shimmer-button_shimmerButton__Zdvgg" style={buttonStyle}>
        <div className="shimmer-button_sparkContainer__F0AK0" />
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={labelStyle}>
          Start free trial
        </p>
        <div className="shimmer-button_highlight__JenRa" />
        <div className="shimmer-button_backdrop__4GONb" />
      </button>
    </div>
  )
}
