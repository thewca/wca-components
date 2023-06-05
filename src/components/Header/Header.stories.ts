import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta: Meta<typeof Header> = {
  title: 'WCA-Components/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof Header>

export const MainWebsite: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    brandImage: '/WCA Logo 2020.svg',
    dropdowns: [
      {
        active: true,
        icon: 'info circle',
        title: 'Information',
        items: [
          {
            path: '/about',
            icon: 'file alternate',
            title: 'About the WCA',
          },
          {
            path: '/documents',
            icon: 'copy',
            title: 'WCA Documents',
          },
          {
            path: '/delegates',
            icon: 'sitemap',
            title: 'WCA Delegates',
          },
          {
            path: '/teams-committees',
            icon: 'id card',
            title: 'Teams, committees and councils',
          },
          {
            path: '/organizations',
            icon: 'flag',
            title: 'Regionals Organizations',
          },
          {
            divider: true,
          },
          {
            path: '/faq',
            icon: 'question circle',
            title: 'Frequently Asked Questions',
          },
          {
            path: '/education',
            icon: 'graduation cap',
            title: 'Educational Resources',
          },
          {
            path: '/contact-website',
            icon: 'envelope',
            title: 'Contact Information',
          },
          {
            path: '/speedcubing-history',
            icon: 'history',
            title: 'Speedcubing History',
          },
          {
            path: '/media-instagram',
            icon: 'camera',
            title: 'Media Submission',
          },
          {
            path: '/privacy',
            icon: 'user secret',
            title: 'Privacy',
          },
          {
            path: '/disclaimer',
            icon: 'exclamation circle',
            title: 'Disclaimer',
          },
          {
            divider: true,
          },
          {
            path: '/score-tools',
            icon: 'wrtench',
            title: 'Tools',
          },
          {
            path: '/logo',
            icon: 'wca',
            title: 'Logo',
          },
        ],
      },
    ],
  },
}
