import type { CSSProperties } from 'react'
import youPeopleHtml from '../legacy/you-people.html?raw'

const wrapperStyle: CSSProperties = {
  display: 'contents',
}

export default function YouPeople() {
  return <div style={wrapperStyle} dangerouslySetInnerHTML={{ __html: youPeopleHtml }} />
}
