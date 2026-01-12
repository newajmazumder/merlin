import { Fragment } from 'react'
import type { CSSProperties } from 'react'

const itemIconWrapStyle: CSSProperties = {
  width: 'calc(1.25rem * var(--mantine-scale))',
}

const itemRowStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  height: 'calc(4rem * var(--mantine-scale))',
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
    className: 'm-8bffd616 mantine-Flex-root __m__-«R8rarbevdb»',
    text: 'Available 24/7 to monitor your inbox, calendar, and Slack.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«R9barbevdb»',
    text: 'Schedule meetings, reply to investors, block time, or snooze threads instantly from your inbox.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«R9rarbevdb»',
    text: 'Merlin combines ChatGPT, Superhuman, Calendly, or Clay and saves hundreds per month.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rabarbevdb»',
    text: 'SOC 2-ready. No human sees your data. Merlin keeps your information private and secure.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rararbevdb»',
    text: 'Automatically maps your most important contacts from email, calendar, and Slack history.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rbbarbevdb»',
    text: 'Flags high-priority issues and suggests next actions without being asked.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rbrarbevdb»',
    text: '$19 per month. No payroll, HR, or hidden costs.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rcbarbevdb»',
    text: 'Access Merlin from WhatsApp and take action on the go.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rcrarbevdb»',
    text: 'Connect Gmail, Slack, and Calendar in 60 seconds. No interviews or training.',
  },
  {
    className: 'm-8bffd616 mantine-Flex-root __m__-«Rdbarbevdb»',
    text: 'No contracts or notice periods. Start and stop when you want.',
  },
]

export default function PricingCardMerlinItems() {
  return (
    <>
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
                <path d="M416 128 192 384l-96-96" fill="none" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="44" />
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
    </>
  )
}
