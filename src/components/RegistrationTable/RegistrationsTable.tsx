import './registrationtable.scss'
import { EventId } from '@wca/helpers'
import React, { useReducer } from 'react'
import { Table } from 'semantic-ui-react'
import CubingIcon from '../CubingIcon'
import FlagIcon from '../FlagIcon'

interface Registration {
  user_id: string
  user: {
    id: string
    wca_id?: string
    name: string
    country: {
      id: string
      name: string
      iso2: string
    }
  }
  event_ids: EventId[]
}

interface RegistrationTableProps {
  registrations: Registration[]
  heldEvents: EventId[]
}

type Direction = 'ascending' | 'descending' | undefined

interface SortState {
  column: string
  data: Registration[]
  direction: Direction
}
function sortReducer(
  state: SortState,
  action: { type: string; column: string }
): SortState {
  if (action.type === 'CHANGE_SORT') {
    if (state.column === action.column) {
      return {
        ...state,
        data: state.data.slice().reverse(),
        direction: state.direction === 'ascending' ? 'descending' : 'ascending',
      }
    }
    switch (action.column) {
      case 'name': {
        return {
          column: action.column,
          data: state.data.sort((a, b) =>
            a.user.name.localeCompare(b.user.name)
          ),
          direction: 'ascending',
        }
      }
      case 'country': {
        return {
          column: action.column,
          data: state.data.sort((a, b) =>
            a.user.country.name.localeCompare(b.user.country.name)
          ),
          direction: 'ascending',
        }
      }
      case 'total': {
        return {
          column: action.column,
          data: state.data.sort(
            (a, b) => a.event_ids.length - b.event_ids.length
          ),
          direction: 'ascending',
        }
      }
      default: {
        throw new Error('Unknown Column')
      }
    }
  }
  throw new Error('Unknown Action')
}

export default function RegistrationsTable({
  registrations,
  heldEvents,
}: RegistrationTableProps) {
  const [state, dispatch] = useReducer(sortReducer, {
    column: '',
    data: registrations,
    direction: undefined,
  })
  const { column, data, direction } = state
  const { newcomers, totalEvents, countrySet, eventCounts } = data.reduce(
    (info, registration) => {
      if (registration.user.wca_id === undefined) {
        info.newcomers++
      }
      info.countrySet.add(registration.user.country.iso2)
      info.totalEvents += registration.event_ids.length
      heldEvents.forEach((id) => {
        if (registration.event_ids.includes(id)) {
          // We can safely ignore the undefined case here because we initialize the map with zeroes
          info.eventCounts.set(id, (info.eventCounts.get(id) as number) + 1)
        }
      })
      return info
    },
    {
      newcomers: 0,
      totalEvents: 0,
      countrySet: new Set<string>(),
      // We have to use a Map instead of an object to preserve event order
      eventCounts: heldEvents.reduce((counts, eventId) => {
        counts.set(eventId, 0)
        return counts
      }, new Map<EventId, number>()),
    }
  )
  return (
    <div className="registrations-table-wrapper">
      <Table className="registrations-table" sortable textAlign="left">
        <Table.Header className="registrations-table-header">
          <Table.Row>
            <Table.HeaderCell
              className="registrations-table-header-item"
              sorted={column === 'name' ? direction : undefined}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              className="registrations-table-header-item"
              sorted={column === 'country' ? direction : undefined}
              onClick={() =>
                dispatch({ type: 'CHANGE_SORT', column: 'country' })
              }
            >
              Citizen Of
            </Table.HeaderCell>
            {heldEvents.map((id) => (
              <Table.HeaderCell
                key={`registration-table-header-${id}`}
                className="registrations-table-header-item"
              >
                <CubingIcon event={id} selected />
              </Table.HeaderCell>
            ))}
            <Table.HeaderCell
              className="registrations-table-header-item"
              sorted={column === 'total' ? direction : undefined}
              onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'total' })}
            >
              Total
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.length > 0 ? (
            data.map((registration) => (
              <Table.Row key={`registration-table-row-${registration.user.id}`}>
                <Table.Cell>
                  {registration.user.wca_id ? (
                    <a
                      href={`https://worldcubeassociation.org/persons/${registration.user.wca_id}`}
                    >
                      {registration.user.name}
                    </a>
                  ) : (
                    registration.user.name
                  )}
                </Table.Cell>
                <Table.Cell>
                  <FlagIcon iso2={registration.user.country.iso2} />
                  {registration.user.country.name}
                </Table.Cell>
                {heldEvents.map((id) => {
                  if (registration.event_ids.includes(id)) {
                    return (
                      <Table.Cell
                        key={`registration-table-row-${registration.user.id}-${id}`}
                      >
                        <CubingIcon event={id} selected={true} />
                      </Table.Cell>
                    )
                  }
                  return (
                    <Table.Cell
                      key={`registration-table-row-${registration.user.id}-${id}`}
                    />
                  )
                })}
                <Table.Cell>{registration.event_ids.length}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell width={12}> No matching records found</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>{`${newcomers} First-Timers + ${
              registrations.length - newcomers
            } Returners = ${registrations.length} People`}</Table.Cell>
            <Table.Cell>{`${countrySet.size}  Countries`}</Table.Cell>
            {[...eventCounts.entries()].map(([id, count]) => (
              <Table.Cell key={`footer-count-${id}`}>{count}</Table.Cell>
            ))}
            <Table.Cell>{totalEvents}</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  )
}
