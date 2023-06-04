import './footer.scss'
import React from 'react'
import UiIcon from '../UiIcon/UiIcon'

interface Link {
  title: string
  path: string
  cssClass: string | null
  target: string | null
  icon: boolean | null
}

interface FooterProps {
  links: Link[]
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="footer ui vertical segment">
      <div className="ui container footer-links text-center">
        <div className="ui horizontal divided list">
          {links.map((link) => {
            return (
              <div key={link.path} className="item">
                {link.icon ? (
                  <UiIcon name={link.title} cssClass="" size="1x" />
                ) : (
                  ''
                )}
                <a
                  href={link.path}
                  target={link.target ?? '_self'}
                  className={link.cssClass ?? ''}
                >
                  {link.title}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
