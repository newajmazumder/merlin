import type { CSSProperties } from 'react'

const containerStyle: CSSProperties = {
  gap: 'calc(5rem * var(--mantine-scale))',
  alignItems: 'center',
  marginTop: 'calc(3.5rem * var(--mantine-scale))',
}

export default function HomeFeaturesSplit() {
  return (
    <>
      <style data-mantine-styles="inline">
        {'.__m__-«R9dcvdb»{flex-direction:column;}@media(min-width: 62em){.__m__-«R9dcvdb»{flex-direction:row;}}'}
      </style>
      <div className="m-8bffd616 mantine-Flex-root __m__-«R9dcvdb»" style={containerStyle}>
        <style data-mantine-styles="inline">
          {'.__m__-«R1mpdcvdb»{width:100%;}@media(min-width: 62em){.__m__-«R1mpdcvdb»{width:50%;}}'}
        </style>
        <div id="react-home-features-clarity" />
        <style data-mantine-styles="inline">
          {'.__m__-«R2mpdcvdb»{width:100%;height:calc(45rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«R2mpdcvdb»{width:50%;height:100%;}}'}
        </style>
        <div id="react-home-features-talk" />
      </div>
    </>
  )
}
