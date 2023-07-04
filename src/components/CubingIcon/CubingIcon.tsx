import './cubingicon.scss'
import { EventId, getEventName } from '@wca/helpers'
import React from 'react'
import { Popup } from 'semantic-ui-react'

export type IconSize = '1x' | '2x' | '3x' | '4x' | '5x'

interface CubingIconProps {
  event: EventId
  selected: boolean
  size?: IconSize
}

export default function CubingIcon({
  event,
  selected,
  size = '1x',
}: CubingIconProps) {
  return (
    <Popup
      inverted
      trigger={
        <i
          className={`icon cubing-icon event-${event} cubing-icon-${size} ${
            selected ? 'cubing-icon-selected' : 'cubing-icon-unselected'
          }`}
        />
      }
    >
      {getEventName(event)}
    </Popup>
  )
}
