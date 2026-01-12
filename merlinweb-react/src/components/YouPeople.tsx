import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const headlineStackStyle: CSSProperties = {
  '--stack-gap': 'calc(0rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  marginBottom: 'calc(4rem * var(--mantine-scale))',
} as CSSProperties

const headlineRowStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  justifyContent: 'center',
}

const headlineTextStyle: CSSProperties = {
  color: 'var(--mantine-color-white)',
  fontWeight: 600,
  letterSpacing: '-2px',
  textAlign: 'center',
  lineHeight: '5rem',
}

const secondaryRowStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.5,
}

const placeRowStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'calc(-5rem * var(--mantine-scale))',
  marginLeft: 'calc(-5rem * var(--mantine-scale))',
}

const placeImageStyle: CSSProperties = {
  transform: 'translate(3rem, 5rem)',
}

const centerAbsoluteStyle: CSSProperties = {
  position: 'absolute',
  top: '-20rem',
  left: '-10rem',
  bottom: 0,
  right: 0,
}

const descriptionWrapStyle: CSSProperties = {
  marginInline: 'auto',
  marginTop: 'calc(6rem * var(--mantine-scale))',
}

const descriptionStyle: CSSProperties = {
  color: 'var(--mantine-color-white)',
  fontSize: 'calc(1.8rem * var(--mantine-scale))',
  textAlign: 'center',
}

export default function YouPeople() {
  return (
    <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
      <div className="m-6d731127 mantine-Stack-root" style={headlineStackStyle}>
        <div className="m-8bffd616 mantine-Flex-root __m__-«Rqdmpgvdb»" style={headlineRowStyle}>
          <style data-mantine-styles="inline">
            {'.__m__-«R6qqdmpgvdb»{font-size:calc(5rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R6qqdmpgvdb»{font-size:calc(6rem * var(--mantine-scale));}}'}
          </style>
          <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R6qqdmpgvdb»" style={headlineTextStyle}>
            You and everybody
          </p>
          <img
            alt=""
            className="m-9e117634 mantine-Image-root mantine-visible-from-md"
            src="everybody.webp"
            style={{ width: '18rem', transform: 'translate(0rem, 1rem)' }}
          />
        </div>
        <div className="m-8bffd616 mantine-Flex-root __m__-«R1admpgvdb»" style={secondaryRowStyle}>
          <style data-mantine-styles="inline">
            {'.__m__-«R2radmpgvdb»{font-size:calc(5rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R2radmpgvdb»{font-size:calc(6rem * var(--mantine-scale));}}'}
          </style>
          <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«R2radmpgvdb»" style={headlineTextStyle}>
            you know in one
          </p>
        </div>
        <div className="m-8bffd616 mantine-Flex-root __m__-«R1qdmpgvdb»" style={placeRowStyle}>
          <style data-mantine-styles="inline">
            {'.__m__-«R6rqdmpgvdb»{width:calc(10rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R6rqdmpgvdb»{width:calc(15rem * var(--mantine-scale));}}'}
          </style>
          <img alt="" className="m-9e117634 mantine-Image-root __m__-«R6rqdmpgvdb»" src="place.webp" style={placeImageStyle} />
          <style data-mantine-styles="inline">
            {'.__m__-«Rarqdmpgvdb»{font-size:calc(5rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Rarqdmpgvdb»{font-size:calc(6rem * var(--mantine-scale));}}'}
          </style>
          <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«Rarqdmpgvdb»" style={{ ...headlineTextStyle, textAlign: 'left' }}>
            place
          </p>
        </div>
      </div>
      <div className="m-4451eb3a mantine-Center-root" style={centerAbsoluteStyle}>
        <style data-mantine-styles="inline">
          {'.__m__-«Ralmpgvdb»{width:calc(28rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Ralmpgvdb»{width:calc(38rem * var(--mantine-scale));}}'}
        </style>
        <img alt="" className="m-9e117634 mantine-Image-root __m__-«Ralmpgvdb»" src="every.svg" />
      </div>
      <div className="m-4451eb3a mantine-Center-root">
        <style data-mantine-styles="inline">
          {'.__m__-«Ratmpgvdb»{width:calc(28rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Ratmpgvdb»{width:calc(38rem * var(--mantine-scale));}}'}
        </style>
        <img alt="" className="m-9e117634 mantine-Image-root __m__-«Ratmpgvdb»" src="timeline.webp" />
      </div>
      <style data-mantine-styles="inline">
        {'.__m__-«R15mpgvdb»{width:90%;}@media(min-width: 62em){.__m__-«R15mpgvdb»{width:70%;}}'}
      </style>
      <div className="m-4451eb3a mantine-Center-root __m__-«R15mpgvdb»" style={descriptionWrapStyle}>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={descriptionStyle}>
          Merlin keeps track of every conversation, meeting, and moment that matters, organizing your relationships so you always know
          when to reach out, follow up, or reconnect
        </p>
      </div>
    </div>
  )
}
