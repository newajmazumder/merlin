import type { CSSProperties } from 'react'

const wrapperStyle: CSSProperties = {
  gap: 'calc(1rem * var(--mantine-scale))',
  alignItems: 'center',
  marginTop: 'calc(1rem * var(--mantine-scale))',
}

const iconStyle: CSSProperties = {
  color: '#808080',
}

export default function FooterDesktopSocial() {
  return (
    <div
      className="m-8bffd616 mantine-Flex-root __m__-«R1ardivdb» mantine-visible-from-md"
      style={wrapperStyle}
    >
      <a href="https://www.linkedin.com/company/merlin-hq" rel="noopener noreferrer" target="_blank">
        <svg
          color="#808080"
          fill="currentColor"
          height="18"
          stroke="currentColor"
          strokeWidth="0"
          style={iconStyle}
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z" />
        </svg>
      </a>
      <a href="mailto:team@merlin.computer">
        <svg
          color="#808080"
          fill="currentColor"
          height="18"
          stroke="currentColor"
          strokeWidth="0"
          style={iconStyle}
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z" />
        </svg>
      </a>
    </div>
  )
}
