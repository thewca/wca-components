import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'WCA-Components/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof Footer>

export const MainWebsite: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    links: [
      {
        title: 'About Us',
        path: '/about',
      },
      {
        title: 'FAQ',
        path: '/faq',
      },
      {
        title: 'Contact',
        path: '/contact/website',
      },
      {
        title: 'Github',
        path: 'https://github.com/thewca/worldcubeassociation.org',
        cssClass: 'hide-new-window-icon',
        target: '_blank',
        icon: true,
      },
      {
        title: 'Privacy',
        path: '/privacy',
      },
      {
        title: 'Disclaimer',
        path: '/disclaimer',
      },
    ],
  },
}
