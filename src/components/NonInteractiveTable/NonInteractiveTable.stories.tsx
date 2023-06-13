import type { Meta, StoryObj } from '@storybook/react'
import NonInteractiveTable from './NonInteractiveTable'

const meta: Meta<typeof NonInteractiveTable> = {
  title: 'WCA-Components/NonInteractiveTable',
  component: NonInteractiveTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof NonInteractiveTable>

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
        {
          title: 'AJ  Blair',
          link: 'https://www.worldcubeassociation.org/persons/2009BLAI01',
        },
        { title: 'United States', flag: 'us' },
        { title: '333', icon: true },
        { title: '' },
        { title: '1' },
      ],
      [
        {
          title: 'Rebecca Hebert',
          link: 'https://www.worldcubeassociation.org/persons/2023HEBE02',
        },
        { title: 'United States', flag: 'us' },
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

export const Rankings: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    header: [
      { title: '#' },
      { title: 'Name' },
      { title: 'Result' },
      { title: 'Citizen of' },
      { title: 'Competition' },
    ],
    rows: [
      [
        { title: '1' },
        {
          title: 'Max Park',
          link: 'https://worldcubeassociation.org/persons/2012PARK03',
        },
        { title: '3.13' },
        { title: 'United States', flag: 'us' },
        { title: 'Pride in Long Beach 2023', flag: 'us' },
      ],
      [
        { title: '2' },
        {
          title: 'Yusheng Du (杜宇生)',
          link: 'https://www.worldcubeassociation.org/persons/2015DUYU01',
        },
        { title: '3.47' },
        { title: 'China', flag: 'cn' },
        { title: 'Wuhu Open 2018', flag: 'cn' },
      ],
    ],
    footer: [],
  },
}
