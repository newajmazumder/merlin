import type { CSSProperties } from 'react'

const headingStyle: CSSProperties = {
  marginInline: 'auto',
  color: '#000',
  fontWeight: 600,
  textAlign: 'center',
}

const imageStyle: CSSProperties = {
  width: '15rem',
  position: 'absolute',
  top: '-4rem',
}

export default function ReadyHeading() {
  return (
    <>
      <style data-mantine-styles="inline">
        {'.__m__-«Rdlngvdb»{left:0rem;}@media(min-width: 62em){.__m__-«Rdlngvdb»{left:12rem;}}'}
      </style>
      <img alt="how it works" className="m-9e117634 mantine-Image-root __m__-«Rdlngvdb»" src="how.svg" style={imageStyle} />
      <style data-mantine-styles="inline">
        {'.__m__-«Rllngvdb»{font-size:calc(4rem * var(--mantine-scale));line-height:4.5rem;width:100%;}@media(min-width: 62em){.__m__-«Rllngvdb»{font-size:calc(6rem * var(--mantine-scale));line-height:6rem;width:70%;}}'}
      </style>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root __m__-«Rllngvdb»" style={headingStyle}>
        Ready to win back 12 hours a week?
      </p>
    </>
  )
}
