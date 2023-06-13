import './flagicon.scss'
import React from 'react'
import { IconSize } from '../CubingIcon/CubingIcon'

interface FlagIconProps {
  iso2: string
  // TODO This can be replaced with a less generic implementation ones all usecases are documented
  cssClass?: string
  size?: IconSize
}

export default function FlagIcon({
  iso2,
  cssClass = '',
  size = '1x',
}: FlagIconProps) {
  return <i className={`flag ${iso2} ${cssClass} flag-icon-${size}`} />
}
