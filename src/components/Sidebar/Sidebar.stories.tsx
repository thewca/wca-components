import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from './Sidebar'

const meta: Meta<typeof Sidebar> = {
  title: 'WCA-Components/Sidebar',
  component: Sidebar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
}
export default meta

type Story = StoryObj<typeof Sidebar>

export const CompetitorsPage: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    items: [
      {
        title: 'Info',
        iconName: 'info circle',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023',
      },
      {
        title: 'Edit',
        iconName: 'lock',
        active: false,
        path: '#collapsible-1',
        subMenu: {
          collapsible: true,
          items: [
            {
              text: 'Organizer View',
              iconName: 'lock',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/edit',
            },
            {
              text: 'Manage Events',
              iconName: 'cubes',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/events/edit',
            },
            {
              text: 'Manage Schedule',
              iconName: 'calendar',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/schedule/edit',
            },
            {
              text: 'Setup payments',
              iconName: 'cc stripe',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/payment_setup',
            },
            {
              text: 'Admin view',
              iconName: 'lock',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/edit/admin',
            },
          ],
        },
      },
      {
        title: 'Registration',
        iconName: 'list ul',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/edit/registrations',
        rightLabel: {
          text: '10',
          kind: 'danger',
        },
      },
      {
        title: 'Clone',
        iconName: 'clone',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/edit/clone_competition',
      },
      {
        title: 'Admin Results',
        iconName: 'cogs',
        active: false,
        path: '#collapsible-2',
        subMenu: {
          collapsible: true,
          items: [
            {
              text: 'Upload and check results',
              iconName: 'check',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/admin/upload-results',
            },
            {
              text: 'Import uploaded results',
              iconName: 'check',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/admin/import-results',
            },
            {
              text: 'Check existing results',
              iconName: 'check',
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/admin/check-existing-results',
            },
          ],
        },
      },
      {
        title: 'Delegate Report',
        iconName: 'edit',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/report',
      },
      {
        title: 'Manage Tabs',
        iconName: 'align left',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/tabs',
      },
      {
        title: 'Register',
        iconName: 'sign in alt',
        active: false,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/register',
      },
      {
        title: 'Competitors',
        iconName: 'users',
        active: true,
        path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/registrations',
        subMenu: {
          collapsible: false,
          items: [
            {
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/registrations/psych-sheet/333',
              cubingIcon: true,
              text: '',
              iconName: '333',
            },
            {
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/registrations/psych-sheet/444',
              cubingIcon: true,
              text: '',
              iconName: '444',
            },
            {
              path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023/registrations/psych-sheet/555',
              cubingIcon: true,
              text: '',
              iconName: '555',
            },
          ],
        },
      },
    ],
  },
}
