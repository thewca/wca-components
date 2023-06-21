import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UiIcon from '../UiIcon'

interface Item {
  path: string
  title: string
  icon: string
  isDivider?: false
  reactRoute?: boolean
}

interface Divider {
  isDivider: true
}

const isDivider = (item: Item | Divider) => item.isDivider

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
  const close = () => setHovered(false)
  return (
    <li
      className={`dropdown ${active ? 'active' : ''} ${hovered ? 'open' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
          // Now we know we have an item
          const { title, reactRoute, path, icon } = item as Item
          return (
            <li key={title}>
              {reactRoute ? (
                <Link to={path}>
                  <UiIcon name={icon} /> {title}
                </Link>
              ) : (
                <a href={path}>
                  <UiIcon name={icon} /> {title}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </li>
  )
}
