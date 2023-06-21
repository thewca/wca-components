import { render } from '@testing-library/react'
import React from 'react'
import { Footer } from '../index'

describe('Footer', () => {
  test('renders the Footer component', () => {
    render(
      <Footer
        links={[
          {
            title: 'About Us',
            path: '/about',
          },
        ]}
      />
    )
  })
})
