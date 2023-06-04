import './index.scss'
import React from 'react'

export type IconSize = '1x' | '2x' | '3x' | '4x' | '5x'

interface UIIconProps {
  name: string
  // TODO This can be replaced with a less generic implementation ones all usecases are documented
  cssClass: string
  size: string
}

export default function UiIcon({ name, cssClass, size = '1x' }: UIIconProps) {
  return (
    <i className={`icon ${name.toLowerCase()} ${cssClass} ui-icon-${size}`} />
  )
}
