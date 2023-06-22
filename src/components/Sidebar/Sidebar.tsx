import './sidebar.scss'
import { EventId } from '@wca/helpers'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
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
  reactRoute?: boolean
  cubingIcon?: boolean
  iconName: string
  text: string
}

interface SidebarItem {
  path: string
  reactRoute?: boolean
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
                      {items.map((subMenuItem) =>
                        subMenuItem.reactRoute ? (
                          <Link
                            key={subMenuItem.text}
                            className="list-group-item"
                            to={subMenuItem.path}
                          >
                            <UiIcon name={subMenuItem.iconName} />
                            {subMenuItem.text}
                          </Link>
                        ) : (
                          <a
                            key={subMenuItem.text}
                            className="list-group-item"
                            href={subMenuItem.path}
                          >
                            <UiIcon name={subMenuItem.iconName} />
                            {subMenuItem.text}
                          </a>
                        )
                      )}
                    </div>
                  ) : (
                    ''
                  )}
                </Fragment>
              )
            }

            return (
              <Fragment key={item.title}>
                {item.reactRoute ? (
                  <Link
                    className={`list-group-item ${item.active ? 'active' : ''}`}
                    to={item.path}
                  >
                    <UiIcon name={item.iconName} />
                    {item.title}
                  </Link>
                ) : (
                  <a
                    className={`list-group-item ${item.active ? 'active' : ''}`}
                    href={item.path}
                  >
                    <UiIcon name={item.iconName} />
                    {item.title}
                  </a>
                )}

                <div className="list-group">
                  <span className="list-group-item">
                    {items.map((subMenuItem) =>
                      subMenuItem.reactRoute ? (
                        <Link
                          key={subMenuItem.path}
                          to={subMenuItem.path}
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
                        </Link>
                      ) : (
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
                      )
                    )}
                  </span>
                </div>
              </Fragment>
            )
          }
          return item.reactRoute ? (
            <Link
              key={item.title}
              className={`list-group-item ${item.active ? 'active' : ''}`}
              to={item.path}
            >
              <UiIcon name={item.iconName} />
              {item.title}
              {item.rightLabel ? (
                <span
                  className={`pull-right label label-${item.rightLabel.kind}`}
                >
                  {item.rightLabel.text}
                </span>
              ) : (
                ''
              )}
            </Link>
          ) : (
            <a
              key={item.title}
              className={`list-group-item ${item.active ? 'active' : ''}`}
              href={item.path}
            >
              <UiIcon name={item.iconName} />
              {item.title}
              {item.rightLabel ? (
                <span
                  className={`pull-right label label-${item.rightLabel.kind}`}
                >
                  {item.rightLabel.text}
                </span>
              ) : (
                ''
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
