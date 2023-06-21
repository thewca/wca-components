import { render } from '@testing-library/react'
import React from 'react'
import { Sidebar } from '../index'

describe('Sidebar', () => {
  test('renders the Sidebar component', () => {
    render(
      <Sidebar
        items={[
          {
            title: 'Info',
            iconName: 'info circle',
            active: false,
            path: 'https://www.worldcubeassociation.org/competitions/StockholmsliganFinal2023',
          },
        ]}
      />
    )
  })
})
