import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'center',
  '--stack-justify': 'center',
} as CSSProperties

const headlineStyle: CSSProperties = {
  display: 'inline-block',
  width: '100%',
  color: '#808080',
  fontWeight: 500,
  textAlign: 'center',
  lineHeight: '4.5rem',
}

const authorStackStyle: CSSProperties = {
  '--stack-gap': 'calc(0.15rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  opacity: 0,
  transition: 'opacity 0.8s',
  marginTop: 'calc(2rem * var(--mantine-scale))',
} as CSSProperties

export default function ReviewQuote() {
  return (
    <div className="home_review__tV0kB m-6d731127 mantine-Stack-root" style={stackStyle}>
      <style data-mantine-styles="inline">
        {'.__m__-«R3davdb»{font-size:calc(3rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R3davdb»{font-size:calc(4rem * var(--mantine-scale));}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R3davdb»" style={headlineStyle}>
        <span id="react-review-headline" />
      </p>
      <div id="react-review-divider" />
      <div className="m-6d731127 mantine-Stack-root" style={authorStackStyle}>
        <div id="react-review-author" />
      </div>
    </div>
  )
}
