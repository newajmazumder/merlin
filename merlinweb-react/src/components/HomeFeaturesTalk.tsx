import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const titleStyle: CSSProperties = {
  marginTop: 'auto',
  marginBottom: 'calc(1rem * var(--mantine-scale))',
}

const descriptionStyle: CSSProperties = {
  color: '#808080',
  letterSpacing: '0.5px',
}

export default function HomeFeaturesTalk() {
  return (
    <div className="home_features__content__talk___Muv1 m-6d731127 mantine-Stack-root __m__-«R2mpdcvdb»" style={stackStyle}>
      <div className="home_animatedBox___1l0N">
        <style data-mantine-styles="inline">
          {'.__m__-«R5mmpdcvdb»{font-size:calc(2rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R5mmpdcvdb»{font-size:calc(2.25rem * var(--mantine-scale));}}'}
        </style>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R5mmpdcvdb»" style={{ whiteSpace: 'nowrap', color: 'var(--mantine-color-white)' }} />
        <div className="home_blurredOval__ddd2h" />
      </div>
      <style data-mantine-styles="inline">
        {'.__m__-«R2mmpdcvdb»{font-size:calc(2.5rem * var(--mantine-scale));line-height:2.5rem;}@media(min-width: 62em){.__m__-«R2mmpdcvdb»{font-size:calc(3rem * var(--mantine-scale));line-height:3rem;}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R2mmpdcvdb»" style={titleStyle}>
        Talk. Type. Done.
      </p>
      <style data-mantine-styles="inline">
        {'.__m__-«R3mmpdcvdb»{font-size:calc(1.6rem * var(--mantine-scale));line-height:2rem;}@media(min-width: 62em){.__m__-«R3mmpdcvdb»{font-size:calc(2rem * var(--mantine-scale));line-height:3rem;}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R3mmpdcvdb»" style={descriptionStyle}>
        Ask Merlin for anything. Whether it is a draft reply, a meeting proposal, or a quick summary, it happens instantly.
      </p>
    </div>
  )
}
