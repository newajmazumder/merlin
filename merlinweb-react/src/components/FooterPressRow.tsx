import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
}

const pressLabelStyle: CSSProperties = {
  color: '#808080',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 400,
}

const buttonStyle: CSSProperties = {
  '--button-color': 'var(--mantine-color-white)',
  borderRadius: '10rem',
  border: '1px solid #ddd',
  boxShadow: '0 2px 1px #ddd',
  padding: 'calc(0.5rem * var(--mantine-scale)) calc(1.5rem * var(--mantine-scale))',
  background: 'var(--mantine-color-white)',
  height: 'calc(4.5rem * var(--mantine-scale))',
} as CSSProperties

const buttonInnerStyle: CSSProperties = {
  gap: 'calc(0.5rem * var(--mantine-scale))',
  alignItems: 'center',
}

export default function FooterPressRow() {
  return (
    <div className="m-8bffd616 mantine-Flex-root __m__-«Rqrdivdb»" style={wrapperStyle}>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={pressLabelStyle}>
        Press
      </p>
      <button
        className="mantine-focus-auto mantine-active m-77c9d27d mantine-Button-root m-87cf2631 mantine-UnstyledButton-root"
        style={buttonStyle}
        type="button"
      >
        <span className="m-80f1301b mantine-Button-inner">
          <span className="m-811560b9 mantine-Button-label">
            <div className="m-8bffd616 mantine-Flex-root __m__-«Rbaqqqrdivdb»" style={buttonInnerStyle}>
              <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={pressLabelStyle}>
                Space
              </p>
              <svg fill="none" height="6" viewBox="0 0 16 6" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0V4H2V0H0V6H16V0H14Z" fill="#808080" />
              </svg>
            </div>
          </span>
        </span>
      </button>
      <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={pressLabelStyle}>
        to start your free trial
      </p>
    </div>
  )
}
