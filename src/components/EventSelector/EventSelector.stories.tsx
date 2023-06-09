import type { Meta, StoryObj } from '@storybook/react'
import { EventId } from '@wca/helpers'
import React, { useState } from 'react'
import EventSelector from './EventSelector'

const meta: Meta<typeof EventSelector> = {
  title: 'WCA-Components/EventSelector',
  component: EventSelector,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof EventSelector>

export const AllEvents: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    selected: [],
    events: [
      '333',
      '222',
      '444',
      '555',
      '666',
      '777',
      '333bf',
      '333fm',
      '333oh',
      'clock',
      'minx',
      'pyram',
      'skewb',
      'sq1',
      '444bf',
      '555bf',
      '333mbf',
    ],
  },
  decorators: [
    (DecoratedStory) => {
      const [selected, setSelected] = useState<EventId[]>([])
      return (
        <DecoratedStory
          args={{
            selected,
            handleEventSelection: setSelected,
            events: [
              '333',
              '222',
              '444',
              '555',
              '666',
              '777',
              '333bf',
              '333fm',
              '333oh',
              'clock',
              'minx',
              'pyram',
              'skewb',
              'sq1',
              '444bf',
              '555bf',
              '333mbf',
            ],
          }}
        />
      )
    },
  ],
}

export const SomePreSelected: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    selected: ['333'],
    events: ['333', '444', '555'],
  },
  decorators: [
    (DecoratedStory) => {
      const [selected, setSelected] = useState<EventId[]>(['333'])
      return (
        <DecoratedStory
          args={{
            selected,
            handleEventSelection: setSelected,
            events: ['333', '444', '555'],
          }}
        />
      )
    },
  ],
}
