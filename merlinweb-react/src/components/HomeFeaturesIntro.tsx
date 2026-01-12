import type { CSSProperties } from 'react'

const titleStyle: CSSProperties = {
  color: '#000',
  fontSize: 'calc(3rem * var(--mantine-scale))',
  fontWeight: 400,
}

const descriptionStyle: CSSProperties = {
  color: '#808080',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 400,
}

export default function HomeFeaturesIntro() {
  return (
    <>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={titleStyle}>
        Your Inbox, Calendar &amp; Slack – finally working together
      </p>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={descriptionStyle}>
        Merlin syncs Gmail, Google Calendar, and Slack so you can book trips, clear tasks, and silence chaos from one chat.
      </p>
    </>
  )
}
