import type { CSSProperties } from 'react'

const dividerStyle: CSSProperties = {
  marginInline: 'auto',
  marginBlock: 'calc(2rem * var(--mantine-scale))',
  width: '80%',
}

export default function FooterDivider() {
  return (
    <>
      <div
        className="m-3eebeb36 mantine-Divider-root"
        data-orientation="horizontal"
        role="separator"
        style={dividerStyle}
      />
      <style data-mantine-styles="inline">
        {'.__m__-«R5ivdb»{gap:calc(2rem * var(--mantine-scale));flex-direction:column;}@media(min-width: 62em){.__m__-«R5ivdb»{gap:calc(8rem * var(--mantine-scale));flex-direction:row;}}'}
      </style>
    </>
  )
}
