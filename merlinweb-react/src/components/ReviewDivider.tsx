import type { CSSProperties } from 'react'

const dividerStyle: CSSProperties = {
  marginInline: 'auto',
  marginTop: 'calc(2rem * var(--mantine-scale))',
  width: 'calc(30rem * var(--mantine-scale))',
}

export default function ReviewDivider() {
  return (
    <div className="m-3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator" style={dividerStyle} />
  )
}
