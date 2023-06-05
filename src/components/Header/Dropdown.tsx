import React, { useState } from 'react'
import UiIcon from '../UiIcon'

interface Item {
  path: string
  title: string
  icon: string
}

interface Divider {
  divider: true
}

// eslint-disable-next-line no-prototype-builtins
const isDivider = (item: object) => item.hasOwnProperty('divider')

export interface DropdownProps {
  active?: boolean
  icon: string
  title: string
  items: (Item | Divider)[]
}

export default function Dropdown({
  active = false,
  icon,
  title,
  items,
}: DropdownProps) {
  const [hovered, setHovered] = useState(false)
  const toggleHover = () => setHovered(!hovered)

  const close = () => setHovered(false)

  return (
    <li
      className={`dropdown ${active ? 'active' : ''} ${hovered ? 'open' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href="#" onClick={close} className="dropdown-toggle top-nav">
        <UiIcon name={icon} />
        <span className="hidden-sm hidden-md">{title}</span>
        <span className="caret" />
      </a>
      <ul className="dropdown-menu" role="menu">
        {items.map((item, index) => {
          if (isDivider(item)) {
            // eslint-disable-next-line react/no-array-index-key
            return <li key={`divider-${index}`} className="divider" />
          }
          return (
            <li key={(item as Item).title}>
              <a href={(item as Item).path}>
                <UiIcon name={(item as Item).icon} /> {(item as Item).title}
              </a>
            </li>
          )
        })}
      </ul>
    </li>
  )
}
