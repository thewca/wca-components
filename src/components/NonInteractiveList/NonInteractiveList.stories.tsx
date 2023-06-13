import type { Meta, StoryObj } from '@storybook/react'
import NonInteractiveList from './NonInteractiveList'

const meta: Meta<typeof NonInteractiveList> = {
  title: 'WCA-Components/NonInteractiveList',
  component: NonInteractiveList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof NonInteractiveList>

export const Competitors: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    header: [
      { title: 'Name' },
      { title: 'Citizen of' },
      { title: '333', icon: true },
      { title: '777', icon: true },
      { title: 'Total' },
    ],
    rows: [
      [
        { title: 'AJ  Blair' },
        { title: 'United States' },
        { title: '333', icon: true },
        { title: '' },
        { title: '1' },
      ],
      [
        { title: 'Rebecca Hebert' },
        { title: 'United States' },
        { title: '333', icon: true },
        { title: '777', icon: true },
        { title: '2' },
      ],
    ],
    footer: [
      '0 first-timers + 2 Returners = 2 People',
      '1 Country',
      '2',
      '1',
      '',
    ],
  },
}
