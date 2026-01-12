import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const titleStyle: CSSProperties = {
  marginBottom: 'calc(1rem * var(--mantine-scale))',
}

const descriptionStyle: CSSProperties = {
  color: '#808080',
  letterSpacing: '0.5px',
}

export default function HomeFeaturesClarity() {
  return (
    <div className="home_features__content__clarity__EBChe m-6d731127 mantine-Stack-root __m__-«R1mpdcvdb»" style={stackStyle}>
      <img alt="" src="apps.webp" />
      <style data-mantine-styles="inline">
        {'.__m__-«R2lmpdcvdb»{margin-top:calc(5rem * var(--mantine-scale));font-size:calc(2.5rem * var(--mantine-scale));line-height:2.5rem;}@media(min-width: 62em){.__m__-«R2lmpdcvdb»{margin-top:calc(8rem * var(--mantine-scale));font-size:calc(3rem * var(--mantine-scale));line-height:3rem;}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R2lmpdcvdb»" style={titleStyle}>
        Clarity over clutter
      </p>
      <style data-mantine-styles="inline">
        {'.__m__-«R3lmpdcvdb»{font-size:calc(1.6rem * var(--mantine-scale));line-height:2rem;}@media(min-width: 62em){.__m__-«R3lmpdcvdb»{font-size:calc(2rem * var(--mantine-scale));line-height:3rem;}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R3lmpdcvdb»" style={descriptionStyle}>
        No more jumping between apps. Merlin sees your full context and lines up what matters, when it matters.
      </p>
    </div>
  )
}
