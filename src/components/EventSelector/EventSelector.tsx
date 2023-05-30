import React, { useState } from 'react'
import CubingIcon from '../CubingIcon'
import './eventselector.scss'
import {WCAEvent} from "../CubingIcon/CubingIcon";

type handleEventSelectionCallback = (events: WCAEvent[]) => void

interface EventSelectorProps{
    handleEventSelection: handleEventSelectionCallback,
    initialSelected: WCAEvent[]
    events: WCAEvent[]
}

export default function EventSelector({ handleEventSelection, events, initialSelected }: EventSelectorProps) {
    const [selectedEvents, setSelectedEvents] = useState<WCAEvent[]>(initialSelected)

    const handleEventToggle = (event: WCAEvent) => {
        if (selectedEvents.includes(event)) {
            const new_events = selectedEvents.filter(
                (selectedEvent) => selectedEvent !== event
            )
            setSelectedEvents(new_events)
            handleEventSelection(new_events)
        } else {
            const new_events = [...selectedEvents, event]
            setSelectedEvents(new_events)
            handleEventSelection(new_events)
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
                Events ({selectedEvents.length}) <br/>
                <button className="all-button" onClick={setAllEvents}> All </button>
                <button className="clear-button" onClick={clearAllEvents}> Clear </button>
            </div>
            <div className="event-bar">
            {events.map((wca_event) => (
                <label key={wca_event} className="event-label">
                    <CubingIcon
                        event={wca_event}
                        selected={selectedEvents.includes(wca_event)}
                        size="2x"
                    />
                    <input
                        className="event-checkbox"
                        type="checkbox"
                        value="0"
                        name={`event-${wca_event}`}
                        onChange={(_) => handleEventToggle(wca_event)}
                    />
                </label>
            ))}
            </div>
        </div>
    )
}
