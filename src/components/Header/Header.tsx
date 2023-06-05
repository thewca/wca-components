import './header.scss'
import React from 'react'
import Dropdown, { DropdownProps } from './Dropdown'

interface HeaderProps {
  brandImage: string
  dropdowns: DropdownProps[]
}

export default function Header({ brandImage, dropdowns }: HeaderProps) {
  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="brand">
        <a href="/">
          <img src={brandImage} alt="brand" />
        </a>
      </div>
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="navbar-collapse collapse disabled">
        <ul className="nav navbar-nav">
          <li className="top-nav logo">
            <a href="/">
              <img src={brandImage} alt="brand" />
            </a>
          </li>
          {dropdowns.map((dropdown) => {
            return <Dropdown key={dropdown.title} {...dropdown} />
          })}
        </ul>
      </div>
    </div>
  )
}
