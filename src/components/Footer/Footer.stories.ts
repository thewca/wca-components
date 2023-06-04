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
        cssClass: null,
        target: null,
        icon: null,
      },
      {
        title: 'FAQ',
        path: '/faq',
        cssClass: null,
        target: null,
        icon: null,
      },
      {
        title: 'Contact',
        path: '/contact/website',
        cssClass: null,
        target: null,
        icon: null,
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
        cssClass: null,
        target: null,
        icon: null,
      },
      {
        title: 'Disclaimer',
        path: '/disclaimer',
        cssClass: null,
        target: null,
        icon: null,
      },
    ],
  },
}
