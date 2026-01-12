import type { CSSProperties } from 'react'

const wordStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  display: 'inline-block',
}

const heroCharStyle: CSSProperties = {
  color: '#000',
  display: 'inline-block',
  filter: 'blur(8px)',
  opacity: 0,
  transform: 'translateY(-30px)',
  transition: 'filter 0.3s, opacity 0.3s, transform 0.3s',
}

const chromaTextStyle: CSSProperties = {
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: '#808080',
  transition: 'background-position 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
  letterSpacing: '-3px',
  textAlign: 'center',
}

const logoStyle: CSSProperties = {
  opacity: 1,
  transition: 'opacity 0.2s',
}

export default function HeroTitle() {
  return (
    <>
      <span style={wordStyle}>
        {'The'.split('').map((char) => (
          <span key={char} className="hero-char" style={heroCharStyle}>
            {char}
          </span>
        ))}
      </span>
      <span style={wordStyle}>
        {"world's".split('').map((char, index) => (
          <span key={`${char}-${index}`} className="hero-char" style={heroCharStyle}>
            {char}
          </span>
        ))}
      </span>
      <img alt="home of merlin" className="home_hero_logo__6f4Js" src="merlin-logo.svg" style={logoStyle} />
      <span style={wordStyle} />
      <span style={wordStyle}>
        {'first'.split('').map((char) => (
          <span key={char} className="hero-char" style={heroCharStyle}>
            {char}
          </span>
        ))}
      </span>
      <style data-mantine-styles="inline">
        {'.__m__-«R2al6vdb»{font-size:calc(6rem * var(--mantine-scale));line-height:6rem;}@media(min-width: 62em){.__m__-«R2al6vdb»{font-size:calc(7rem * var(--mantine-scale));line-height:7rem;}}'}
      </style>
      <span
        className="mantine-focus-auto home_chroma-text__rVoZG m-b6d8b162 mantine-Text-root __m__-«R2al6vdb»"
        id="chromaText"
        style={chromaTextStyle}
      >
        AI chief of staff
      </span>
    </>
  )
}
