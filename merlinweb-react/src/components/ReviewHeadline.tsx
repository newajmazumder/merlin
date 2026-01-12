import type { CSSProperties } from 'react'

const wordStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  display: 'inline-block',
}

const charStyle: CSSProperties = {
  color: '#eee',
  display: 'inline-block',
  filter: 'blur(8px)',
  opacity: 0,
  transition: 'filter 0.3s, opacity 0.3s',
}

const reviewText =
  '"Merlin became the operating system for my day—cleared my plate and gave me back 12 hours a week."'

export default function ReviewHeadline() {
  const words = reviewText.split(' ')
  return (
    <>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} style={wordStyle}>
          {word.split('').map((char, charIndex) => (
            <span key={`${char}-${charIndex}`} className="review-char" style={charStyle}>
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  )
}
