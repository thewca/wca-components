import './uiicon.scss'
import React from 'react'
import { IconSize } from '../CubingIcon/CubingIcon'

interface UIIconProps {
  name: string
  // TODO This can be replaced with a less generic implementation ones all usecases are documented
  cssClass?: string
  size?: IconSize
}

export default function UiIcon({
  name,
  cssClass = '',
  size = '1x',
}: UIIconProps) {
  return (
    <i className={`icon ${name.toLowerCase()} ${cssClass} ui-icon-${size}`} />
  )
}
