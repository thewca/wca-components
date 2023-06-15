import { render } from '@testing-library/react'
import React from 'react'
import EventSelector from './EventSelector'

describe('EventSelector', () => {
  test('renders the EventSelector component', () => {
    render(
      <EventSelector
        handleEventSelection={() => {}}
        events={['333']}
        size="2x"
        initialSelected={[]}
      />
    )
  })
})
