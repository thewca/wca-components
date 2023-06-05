import UiIcon from '../UiIcon'
import React, { useState } from 'react'

type Item = {
  path: string
  title: string
  icon: string
}

type Divider = {
  divider: true
}

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
      <a href="#" onClick={close} className="dropdown-toggle top-nav">
        <UiIcon name={icon} />
        <span className="hidden-sm hidden-md">{title}</span>
        <span className="caret"></span>
      </a>
      <ul className="dropdown-menu" role="menu">
        {items.map((item, index) => {
          if ((item as Divider).divider) {
            return <li className="divider" key={index}></li>
          } else {
            return (
              <li>
                <a href={(item as Item).path} key={index}>
                  <UiIcon name={(item as Item).icon} /> {(item as Item).title}
                </a>
              </li>
            )
          }
        })}
      </ul>
    </li>
  )
}
