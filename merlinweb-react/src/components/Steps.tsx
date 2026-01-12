import type { CSSProperties } from 'react'

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'center',
  '--stack-justify': 'center',
} as CSSProperties

const titleStyle: CSSProperties = {
  fontSize: 'calc(2rem * var(--mantine-scale))',
  fontWeight: 600,
  textAlign: 'center',
}

const descriptionStyle: CSSProperties = {
  color: '#6A6B6C',
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  textAlign: 'center',
}

const iconStyle: CSSProperties = {
  width: '5rem',
}

export default function Steps() {
  return (
    <>
      <style data-mantine-styles="inline">
        {'.__m__-«Rdmngvdb»{width:100%;}@media(min-width: 62em){.__m__-«Rdmngvdb»{width:33.33%;}}'}
      </style>
      <div className="m-6d731127 mantine-Stack-root __m__-«Rdmngvdb»" style={stackStyle}>
        <img alt="step one" src="1.png" style={iconStyle} />
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
          Connect in minutes
        </p>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={descriptionStyle}>
          Sync Gmail, Google Calendar, and more. Merlin filters the noise and finds what matters.
        </p>
      </div>
      <style data-mantine-styles="inline">
        {'.__m__-«Rlmngvdb»{width:100%;}@media(min-width: 62em){.__m__-«Rlmngvdb»{width:33.33%;}}'}
      </style>
      <div className="m-6d731127 mantine-Stack-root __m__-«Rlmngvdb»" style={stackStyle}>
        <img alt="step one" src="2.png" style={iconStyle} />
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
          See your day prioritized
        </p>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={descriptionStyle}>
          Merlin surfaces the emails, meetings, and tasks that matter most to your day.
        </p>
      </div>
      <style data-mantine-styles="inline">
        {'.__m__-«Rtmngvdb»{width:100%;}@media(min-width: 62em){.__m__-«Rtmngvdb»{width:33.33%;}}'}
      </style>
      <div className="m-6d731127 mantine-Stack-root __m__-«Rtmngvdb»" style={stackStyle}>
        <img alt="step one" src="3.png" style={iconStyle} />
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
          Take back your time
        </p>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={descriptionStyle}>
          Complete high-impact priorities with one click and reclaim 12+ hours a week.
        </p>
      </div>
    </>
  )
}
