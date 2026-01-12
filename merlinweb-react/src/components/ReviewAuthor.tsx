import type { CSSProperties } from 'react'

const authorStyle: CSSProperties = {
  color: '#000',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 500,
  textAlign: 'center',
}

const titleStyle: CSSProperties = {
  color: '#808080',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 500,
  textAlign: 'center',
}

export default function ReviewAuthor() {
  return (
    <>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={authorStyle}>
        Elias Moore
      </p>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
        CEO, Strideworks
      </p>
    </>
  )
}
