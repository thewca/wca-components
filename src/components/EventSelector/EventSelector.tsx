import './eventselector.scss'
import { EventId } from '@wca/helpers'
import React from 'react'
import CubingIcon from '../CubingIcon'
import { IconSize } from '../CubingIcon/CubingIcon'

type HandleEventSelectionCallback = (events: EventId[]) => void

interface EventSelectorProps {
  handleEventSelection: HandleEventSelectionCallback
  selected: EventId[]
  events: EventId[]
  size: IconSize
}

export default function EventSelector({
  handleEventSelection,
  selected,
  events,
  size = '2x',
}: EventSelectorProps) {
  const handleEventToggle = (event: EventId) => {
    if (selected.includes(event)) {
      const newEvents = selected.filter(
        (selectedEvent) => selectedEvent !== event
      )
      handleEventSelection(newEvents)
    } else {
      const newEvents = [...selected, event]
      handleEventSelection(newEvents)
    }
  }

  const setAllEvents = () => {
    handleEventSelection(events)
  }

  const clearAllEvents = () => {
    handleEventSelection([])
  }

  return (
    <div className="event-selection-container">
      <div className="side-bar">
        Events ({selected.length}) <br />
        <button className="all-button" onClick={setAllEvents}>
          {' '}
          All{' '}
        </button>
        <button className="clear-button" onClick={clearAllEvents}>
          {' '}
          Clear{' '}
        </button>
      </div>
      <div className="event-bar">
        {events.map((wcaEvent) => (
          <label key={wcaEvent} className="event-label">
            <CubingIcon
              event={wcaEvent}
              selected={selected.includes(wcaEvent)}
              size={size}
            />
            <input
              className="event-checkbox"
              type="checkbox"
              value="0"
              name={`event-${wcaEvent}`}
              onChange={(_) => handleEventToggle(wcaEvent)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}
