import type { CSSProperties } from 'react'

const containerStyle: CSSProperties = {
  borderRadius: '4rem',
  marginTop: 'calc(4rem * var(--mantine-scale))',
  padding: 'calc(2rem * var(--mantine-scale))',
  paddingBlock: 'calc(4rem * var(--mantine-scale))',
  background: 'linear-gradient(180deg, #96dfff 0%, #ededed 58.17%, #dddddd 100%)',
}

const stackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  width: 'calc(68rem * var(--mantine-scale))',
} as CSSProperties

const messageWrapStyle: CSSProperties = {
  opacity: 1,
  transform: 'translateY(20px)',
}

const messageFlexStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
}

const messageBubbleStyle: CSSProperties = {
  borderRadius: '2rem',
  padding: 'calc(1rem * var(--mantine-scale)) calc(1.5rem * var(--mantine-scale))',
  background: '#3575F8',
  color: 'var(--mantine-color-white)',
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  letterSpacing: '0.5px',
  width: '60%',
}

const mentionStyle: CSSProperties = {
  color: '#9EE3F7',
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  letterSpacing: '0.5px',
}

const avatarStyle: CSSProperties = {
  height: '3rem',
}

const statusStyle: CSSProperties = {
  border: '1px solid #E4DFDE',
  borderRadius: '2rem',
  justifyContent: 'flex-start',
  marginTop: 'calc(3rem * var(--mantine-scale))',
  marginLeft: 'calc(5rem * var(--mantine-scale))',
  padding: 'calc(1rem * var(--mantine-scale)) calc(1.5rem * var(--mantine-scale))',
  background: '#FDF8F7',
  color: 'var(--mantine-color-black)',
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  width: 'min-content',
}

const shimmerStyle: CSSProperties = {
  display: 'inline-block',
  backgroundSize: '250% 100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  backgroundImage:
    'linear-gradient(90deg, transparent calc(50% - 50px), rgba(255, 255, 255, 0.8), transparent calc(50% + 50px)), linear-gradient(#aaa, #aaa)',
  backgroundRepeat: 'no-repeat',
  fontSize: '1.4rem',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  backgroundPosition: '100% center',
}

const responseFlexStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  justifyContent: 'flex-start',
}

const responseStackStyle: CSSProperties = {
  '--stack-gap': 'var(--mantine-spacing-md)',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
  border: '1px solid #E4DFDE',
  borderRadius: '2rem',
  padding: 'calc(2rem * var(--mantine-scale))',
  background: '#FDF8F7',
} as CSSProperties

const responseIntroStyle: CSSProperties = {
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  letterSpacing: '0.5px',
}

const cardStyle: CSSProperties = {
  '--paper-radius': 'calc(1.5rem * var(--mantine-scale))',
  '--paper-shadow': '1px 3px 1px 0px #EBE8E9',
  border: '1px solid #EBE8E9',
  padding: 'calc(1rem * var(--mantine-scale)) calc(1.25rem * var(--mantine-scale))',
  background: '#fff',
} as CSSProperties

const cardSpacerStyle: CSSProperties = {
  marginTop: 'calc(2rem * var(--mantine-scale))',
}

const detailTitleStyle: CSSProperties = {
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  fontWeight: 600,
  letterSpacing: '0.5px',
}

const detailTextStyle: CSSProperties = {
  fontSize: 'calc(1.4rem * var(--mantine-scale))',
  letterSpacing: '0.5px',
}

const noteStyle: CSSProperties = {
  marginTop: 'calc(2rem * var(--mantine-scale))',
  fontSize: 'calc(1.2rem * var(--mantine-scale))',
  letterSpacing: '0.5px',
  fontStyle: 'italic',
}

const lockStyle: CSSProperties = {
  width: '110%',
  marginInline: 'auto',
  marginTop: '2rem',
  marginBottom: '-2rem',
  transform: 'translateX(-2.15rem)',
}

export default function HomeFeaturesChat() {
  return (
    <div className="m-4451eb3a mantine-Center-root" style={containerStyle}>
      <div className="m-6d731127 mantine-Stack-root" style={stackStyle}>
        <div style={messageWrapStyle}>
          <div className="m-8bffd616 mantine-Flex-root __m__-«R9mndcvdb»" style={messageFlexStyle}>
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={messageBubbleStyle}>
              Hey Merlin - When can{' '}
              <span className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={mentionStyle}>
                Jason Glover
              </span>{' '}
              and I squeeze in a trip to Tokyo together for 4 days?
            </p>
            <img alt="" className="m-9e117634 mantine-Image-root" src="jason.png" style={avatarStyle} />
          </div>
        </div>
        <div style={messageWrapStyle}>
          <div className="m-8bffd616 mantine-Flex-root __m__-«Ramndcvdb»" style={statusStyle}>
            <div style={shimmerStyle}>Checking calendars…</div>
          </div>
        </div>
        <div style={messageWrapStyle}>
          <div className="m-8bffd616 mantine-Flex-root __m__-«Rbmndcvdb»" style={responseFlexStyle}>
            <svg fill="none" height="30" viewBox="0 0 49 50" width="30" xmlns="http://www.w3.org/2000/svg">
              <rect fill="black" height="50" rx="24.458" width="48.9161" />
              <path d="M21.1871 23.9236L18.0355 25.7249L12.8004 16.5656L15.952 14.7643L21.1871 23.9236Z" fill="white" />
              <path d="M27.5684 21.9601L24.4168 23.7614L19.1818 14.6021L22.3334 12.8008L27.5684 21.9601Z" fill="white" />
              <path
                d="M32.6891 13.9927L36.0706 13.8461L36.1013 14.556C36.334 19.9216 33.6763 26.1054 28.8098 31.0392C26.2226 33.6622 23.2944 35.6485 20.3268 36.9199L19.6737 37.1997L18.3408 34.0886L18.9939 33.8088C21.5373 32.7191 24.1044 30.99 26.4002 28.6624C30.7728 24.2293 32.9026 18.9153 32.7199 14.7026L32.6891 13.9927Z"
                fill="white"
              />
            </svg>
            <style data-mantine-styles="inline">
              {'.__m__-«R2mrmndcvdb»{width:100%;}@media(min-width: 62em){.__m__-«R2mrmndcvdb»{width:70%;}}'}
            </style>
            <div className="m-6d731127 mantine-Stack-root __m__-«R2mrmndcvdb»" style={responseStackStyle}>
              <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={responseIntroStyle}>
                Alright, I've crunched the chaos.
                <br />
                <br />
                Here's the game plan:
              </p>
              <div
                className="m-e615b15f mantine-Card-root m-1b7284a3 mantine-Paper-root"
                style={{ ...cardStyle, ...cardSpacerStyle }}
              >
                <style data-mantine-styles="inline">
                  {'.__m__-«R3ammrmndcvdb»{align-items:flex-start;}@media(min-width: 62em){.__m__-«R3ammrmndcvdb»{align-items:center;}}'}
                </style>
                <div className="m-8bffd616 mantine-Flex-root __m__-«R3ammrmndcvdb»" style={{ gap: 'calc(1rem * var(--mantine-scale))' }}>
                  <style data-mantine-styles="inline">
                    {'.__m__-«Rdnammrmndcvdb»{width:calc(3rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Rdnammrmndcvdb»{width:calc(4rem * var(--mantine-scale));}}'}
                  </style>
                  <img alt="" className="m-9e117634 mantine-Image-root __m__-«Rdnammrmndcvdb»" src="date.svg" />
                  <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTextStyle}>
                    <span className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTitleStyle}>
                      Dates:
                    </span>{' '}
                    March 16-20. Shifted Jason's 9 AM meeting to the 15th (he'll get over it).
                  </p>
                </div>
              </div>
              <div className="m-e615b15f mantine-Card-root m-1b7284a3 mantine-Paper-root" style={cardStyle}>
                <style data-mantine-styles="inline">
                  {'.__m__-«R3bmmrmndcvdb»{align-items:flex-start;}@media(min-width: 62em){.__m__-«R3bmmrmndcvdb»{align-items:center;}}'}
                </style>
                <div className="m-8bffd616 mantine-Flex-root __m__-«R3bmmrmndcvdb»" style={{ gap: 'calc(1rem * var(--mantine-scale))' }}>
                  <style data-mantine-styles="inline">
                    {'.__m__-«Rdnbmmrmndcvdb»{width:calc(3rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Rdnbmmrmndcvdb»{width:calc(4rem * var(--mantine-scale));}}'}
                  </style>
                  <img alt="" className="m-9e117634 mantine-Image-root __m__-«Rdnbmmrmndcvdb»" src="flight.svg" />
                  <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTextStyle}>
                    <span className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTitleStyle}>
                      Flights:
                    </span>{' '}
                    ANA Nonstop, March 16 @ 8 PM. Lie-flat seats, Wi-Fi, zero layover trauma.
                  </p>
                </div>
              </div>
              <div className="m-e615b15f mantine-Card-root m-1b7284a3 mantine-Paper-root" style={cardStyle}>
                <style data-mantine-styles="inline">
                  {'.__m__-«R3cmmrmndcvdb»{align-items:flex-start;}@media(min-width: 62em){.__m__-«R3cmmrmndcvdb»{align-items:center;}}'}
                </style>
                <div className="m-8bffd616 mantine-Flex-root __m__-«R3cmmrmndcvdb»" style={{ gap: 'calc(1rem * var(--mantine-scale))' }}>
                  <style data-mantine-styles="inline">
                    {'.__m__-«Rdncmmrmndcvdb»{width:calc(3rem * var(--mantine-scale));}@media(min-width: 62em){.__m__-«Rdncmmrmndcvdb»{width:calc(4rem * var(--mantine-scale));}}'}
                  </style>
                  <img alt="" className="m-9e117634 mantine-Image-root __m__-«Rdncmmrmndcvdb»" src="stay.svg" />
                  <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTextStyle}>
                    <span className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={detailTitleStyle}>
                      Stay:
                    </span>{' '}
                    Daikanyama Airbnb. Artsy, quiet, and 2 blocks from Arabica Coffee (Jason's Insta crush).
                  </p>
                </div>
              </div>
              <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={noteStyle}>
                If this sounds good, hit the button below and I'll get things booked. If not, tell me what's off!
              </p>
              <style data-mantine-styles="inline">
                {'.__m__-«R6mmrmndcvdb»{width:100%;}@media(min-width: 62em){.__m__-«R6mmrmndcvdb»{width:110%;}}'}
              </style>
              <img
                alt=""
                className="m-9e117634 mantine-Image-root __m__-«R6mmrmndcvdb»"
                src="lock.svg"
                style={lockStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
