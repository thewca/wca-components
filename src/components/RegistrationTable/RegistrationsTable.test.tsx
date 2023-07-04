import { render } from '@testing-library/react'
import React from 'react'
import { RegistrationsTable } from '../index'

describe('RegistrationsTable', () => {
  test('renders the RegistrationsTable component', () => {
    render(
      <RegistrationsTable
        heldEvents={['333', '222', '444']}
        registrations={[
          {
            user_id: '1',
            event_ids: ['333', '222', '444'],
            user: {
              id: '1',
              country: { iso2: 'nl', name: 'Netherlands', id: 'nl' },
              name: 'Ron van Bruchem',
              wca_id: '2003BRUC01',
            },
          },
        ]}
      />
    )
  })
})
