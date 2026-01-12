import { Fragment } from 'react'
import type { CSSProperties } from 'react'

const cardStyle: CSSProperties = {
  '--paper-radius': 'calc(2.5rem * var(--mantine-scale))',
  '--paper-shadow': 'var(--mantine-shadow-xs)',
  padding: 'calc(0rem * var(--mantine-scale))',
  maxWidth: 'calc(40rem * var(--mantine-scale))',
} as CSSProperties

const headerStyle: CSSProperties = {
  borderRadius: '2rem 2rem 0 0',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'calc(1rem * var(--mantine-scale))',
  background: '#eee',
}

const headerTextStyle: CSSProperties = {
  color: '#666',
  fontSize: 'calc(2rem * var(--mantine-scale))',
}

const stackStyle: CSSProperties = {
  '--stack-gap': 'calc(1.5rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  padding: 'calc(2rem * var(--mantine-scale))',
} as CSSProperties

const itemRowStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  height: 'calc(4rem * var(--mantine-scale))',
}

const itemIconWrapStyle: CSSProperties = {
  width: 'calc(1.25rem * var(--mantine-scale))',
}

const itemTextStyle: CSSProperties = {
  color: '#666',
  fontSize: 'calc(1.2rem * var(--mantine-scale))',
}

const dividerStyle: CSSProperties = {
  color: '#eee',
}

const iconStyle: CSSProperties = {
  color: '#666',
}

const items = [
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«R8rbbbevdb»',
    text: 'Works only during office hours. May miss urgent issues after hours or on weekends.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«R9bbbbevdb»',
    text: 'Requires back-and-forth. Delays are common due to bandwidth and task switching.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«R9rbbbevdb»',
    text: 'Still need separate tools for AI, scheduling, email UX, and contact intelligence.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rabbbbevdb»',
    text: "Data privacy depends on one person's discretion and your trust.",
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rarbbbevdb»',
    text: 'Assistants maintain lists based on memory or scattered notes.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rbbbbbevdb»',
    text: 'Waits for instruction. May overlook subtle but urgent items.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rbrbbbevdb»',
    text: '$4,000 to $8,000 per month plus benefits, software, and admin time.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rcbbbbevdb»',
    text: 'Not optimized for async messaging or quick mobile-first communication.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rcrbbbevdb»',
    text: 'Weeks to hire, train, and build trust. Impact is delayed.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rdbbbbevdb»',
    text: 'Requires HR processes, transition plans, and emotional navigation.',
  },
]

export default function PricingCardTraditional() {
  return (
    <div
      className="m-e615b15f mantine-Card-root m-1b7284a3 mantine-Paper-root"
      data-with-border="true"
      style={cardStyle}
    >
      <div className="m-8bffd616 mantine-Flex-root __m__-«Rrbbevdb»" style={headerStyle}>
        <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={headerTextStyle}>
          Traditional EA
        </p>
      </div>
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        {items.map((item, index) => (
          <Fragment key={item.className}>
            <div className={item.className} style={itemRowStyle}>
              <div className="" style={itemIconWrapStyle}>
                <svg
                  color="#666"
                  fill="currentColor"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="0"
                  style={iconStyle}
                  viewBox="0 0 512 512"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
                </svg>
              </div>
              <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={itemTextStyle}>
                {item.text}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="m-3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator" style={dividerStyle} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
