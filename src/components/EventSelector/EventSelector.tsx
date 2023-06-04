import './index.scss'
import { EventId } from '@wca/helpers'
import React, { useState } from 'react'
import CubingIcon from '../CubingIcon'
import { IconSize } from '../CubingIcon/CubingIcon'

type HandleEventSelectionCallback = (events: EventId[]) => void

interface EventSelectorProps {
  handleEventSelection: HandleEventSelectionCallback
  initialSelected: EventId[]
  events: EventId[]
  size: IconSize
}

export default function EventSelector({
  handleEventSelection,
  events,
  initialSelected,
  size = '2x',
}: EventSelectorProps) {
  const [selectedEvents, setSelectedEvents] =
    useState<EventId[]>(initialSelected)

  const handleEventToggle = (event: EventId) => {
    if (selectedEvents.includes(event)) {
      const newEvents = selectedEvents.filter(
        (selectedEvent) => selectedEvent !== event
      )
      setSelectedEvents(newEvents)
      handleEventSelection(newEvents)
    } else {
      const newEvents = [...selectedEvents, event]
      setSelectedEvents(newEvents)
      handleEventSelection(newEvents)
    }
  }

  const setAllEvents = () => {
    setSelectedEvents(events)
    handleEventSelection(events)
  }

  const clearAllEvents = () => {
    setSelectedEvents([])
    handleEventSelection([])
  }

  return (
    <div className="event-selection-container">
      <div className="side-bar">
        Events ({selectedEvents.length}) <br />
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
              selected={selectedEvents.includes(wcaEvent)}
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
