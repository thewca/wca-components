import './icons.scss'
import React from 'react'

export type WCAEvent = '222' | '333' | '333bf' | '333fm' | '333mbf' | '333ft' | '333oh' | '444' | '444bf' | '555' |
                '555bf' | '666' | '777' | 'clock' | 'magic' | 'minx' | 'mmagic' | 'pyram' | 'skewb' | 'sq1'

export type IconSize = '1x' | '2x' | '3x' | '4x' | '5x'

interface CubingIconProps{
    event: WCAEvent
    selected: boolean
    size: IconSize
}

export default function CubingIcon({ event, selected, size = '1x' }: CubingIconProps) {
    return (
        <i
            className={`icon cubing-icon event-${event} cubing-icon-${size}`}
            style={{ color: `${selected ? 'rgb(0, 0, 0)' : 'rgb(204, 204, 204)'}` }}
        />
    )
}
