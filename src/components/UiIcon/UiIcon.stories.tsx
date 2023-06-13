import type { Meta, StoryObj } from '@storybook/react'
import UiIcon from './UiIcon'

const meta: Meta<typeof UiIcon> = {
  title: 'WCA-Components/UiIcon',
  component: UiIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof UiIcon>

export const Normal: Story = {
  args: {
    size: '1x',
    name: 'wrench',
  },
}

export const Medium: Story = {
  args: {
    size: '2x',
    name: 'users',
  },
}

export const Large: Story = {
  args: {
    size: '4x',
    name: 'list ul',
  },
}
