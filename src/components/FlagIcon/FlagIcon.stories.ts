import type { Meta, StoryObj } from '@storybook/react'
import FlagIcon from './FlagIcon'

const meta: Meta<typeof FlagIcon> = {
  title: 'WCA-Components/FlagIcon',
  component: FlagIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof FlagIcon>

export const Normal: Story = {
  args: {
    size: '1x',
    iso2: 'us',
  },
}

export const Medium: Story = {
  args: {
    size: '2x',
    iso2: 'de',
  },
}

export const Large: Story = {
  args: {
    size: '4x',
    iso2: 'ae',
  },
}
