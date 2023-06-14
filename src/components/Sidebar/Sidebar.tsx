import './sidebar.scss'
import { EventId } from '@wca/helpers'
import React, { Fragment, useState } from 'react'
import CubingIcon from '../CubingIcon'
import UiIcon from '../UiIcon'

interface Label {
  text: string
  kind: 'danger' | ''
}

interface SidebarSubMenu {
  collapsible: boolean
  items: SidebarSubMenuItem[]
}

interface SidebarSubMenuItem {
  path: string
  cubingIcon?: boolean
  iconName: string
  text: string
}

interface SidebarItem {
  path: string
  title: string
  iconName: string
  rightLabel?: Label
  subMenu?: SidebarSubMenu
  active: boolean
}

interface SidebarProps {
  items: SidebarItem[]
}

export default function Sidebar({ items }: SidebarProps) {
  const [collapsed, setCollapsed] = useState([''])
  const toggleCollapsed = (path: string) => {
    if (collapsed.includes(path)) {
      setCollapsed(collapsed.filter((c) => c !== path))
    } else {
      setCollapsed([...collapsed, path])
    }
  }
  return (
    <div>
      <div className="list-group list-group-root affix-top">
        {items.map((item) => {
          if (item.subMenu) {
            const { collapsible, items } = item.subMenu
            if (collapsible) {
              return (
                <Fragment key={item.title}>
                  <a
                    className={`list-group-item ${item.active ? 'active' : ''}`}
                    href={item.path}
                    onClick={() => toggleCollapsed(item.path)}
                  >
                    <UiIcon name={item.iconName} />
                    {item.title}
                  </a>
                  {collapsed.includes(item.path) ? (
                    <div className="list-group collapse in">
                      {items.map((subMenuItem) => (
                        <a
                          key={subMenuItem.text}
                          className="list-group-item"
                          href={subMenuItem.path}
                        >
                          <UiIcon name={subMenuItem.iconName} />
                          {subMenuItem.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </Fragment>
              )
            }

            return (
              <Fragment key={item.title}>
                <a
                  className={`list-group-item ${item.active ? 'active' : ''}`}
                  href={item.path}
                >
                  <UiIcon name={item.iconName} />
                  {item.title}
                </a>
                <div className="list-group">
                  <span className="list-group-item">
                    {items.map((subMenuItem) => (
                      <a
                        key={subMenuItem.path}
                        href={subMenuItem.path}
                        className="nav-event"
                      >
                        {subMenuItem.cubingIcon ? (
                          <CubingIcon
                            event={subMenuItem.iconName as EventId}
                            selected={false}
                          />
                        ) : (
                          subMenuItem.text
                        )}
                      </a>
                    ))}
                  </span>
                </div>
              </Fragment>
            )
          }
          return (
            <a
              key={item.title}
              className={`list-group-item ${item.active ? 'active' : ''}`}
              href={item.path}
            >
              <UiIcon name={item.iconName} />
              {item.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
