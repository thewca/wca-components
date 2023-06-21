import { render } from '@testing-library/react'
import React from 'react'
import { Header } from '../index'

describe('Header', () => {
  test('renders the Header component', () => {
    render(
      <Header
        brandImage={'/wca2020.svg'}
        dropdowns={[
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
            ],
          },
        ]}
      />
    )
  })
})
