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
      { text: 'Name' },
      { text: 'Citizen of' },
      { text: '333', cubingIcon: true },
      { text: '777', cubingIcon: true },
      { text: 'Total' },
    ],
    rows: [
      [
        {
          text: 'AJ  Blair',
          link: 'https://www.worldcubeassociation.org/persons/2009BLAI01',
        },
        { text: 'United States', flag: 'us' },
        { text: '333', cubingIcon: true },
        { text: '' },
        { text: '1' },
      ],
      [
        {
          text: 'Rebecca Hebert',
          link: 'https://www.worldcubeassociation.org/persons/2023HEBE02',
        },
        { text: 'United States', flag: 'us' },
        { text: '333', cubingIcon: true },
        { text: '777', cubingIcon: true },
        { text: '2' },
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
      { text: '#' },
      { text: 'Name' },
      { text: 'Result' },
      { text: 'Citizen of' },
      { text: 'Competition' },
    ],
    rows: [
      [
        { text: '1' },
        {
          text: 'Max Park',
          link: 'https://worldcubeassociation.org/persons/2012PARK03',
        },
        { text: '3.13' },
        { text: 'United States', flag: 'us' },
        {
          text: 'Pride in Long Beach 2023',
          flag: 'us',
          link: 'https://www.worldcubeassociation.org/competitions/PrideInLongBeach2023',
        },
      ],
      [
        { text: '2' },
        {
          text: 'Yusheng Du (杜宇生)',
          link: 'https://www.worldcubeassociation.org/persons/2015DUYU01',
        },
        { text: '3.47' },
        { text: 'China', flag: 'cn' },
        {
          text: 'Wuhu Open 2018',
          flag: 'cn',
          link: 'https://www.worldcubeassociation.org/competitions/WuhuOpen2018',
        },
      ],
    ],
    footer: [],
  },
}
