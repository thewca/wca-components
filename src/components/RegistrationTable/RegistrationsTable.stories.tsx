import type { Meta, StoryObj } from '@storybook/react'
import RegistrationsTable from './RegistrationsTable'

const meta: Meta<typeof RegistrationsTable> = {
  title: 'WCA-Components/RegistrationsTable',
  component: RegistrationsTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof RegistrationsTable>

export const Competitors: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    registrations: [
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
      {
        user_id: '6427',
        event_ids: ['222', '333bf'],
        user: {
          id: '6427',
          country: { iso2: 'uk', name: 'United Kingdom', id: 'uk' },
          name: 'Joey Gouly',
          wca_id: '2007GOUL01',
        },
      },
      {
        user_id: '999999',
        event_ids: ['333', '222'],
        user: {
          id: '999999',
          country: { iso2: 'us', name: 'United States', id: 'us' },
          name: 'Alex Newcomer',
        },
      },
    ],
    heldEvents: ['333', '222', '444', '555', '333bf'],
  },
}

export const Empty: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    registrations: [],
    heldEvents: ['333', '333bf'],
  },
}
