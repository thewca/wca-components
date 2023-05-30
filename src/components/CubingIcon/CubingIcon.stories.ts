import type { Meta, StoryObj } from '@storybook/react'

import CubingIcon from './CubingIcon'

const meta: Meta<typeof CubingIcon> = {
  title: 'WCA-Components/CubingIcon',
  component: CubingIcon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;

type Story = StoryObj<typeof CubingIcon>

export const Selected: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    selected: true,
    event: '333'
  },
};

export const Large: Story = {
  args: {
    size: '4x',
    event: '333'
  },
};

export const bigCube: Story = {
  args: {
    event: '777',
  },
};