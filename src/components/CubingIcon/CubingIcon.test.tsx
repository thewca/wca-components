import { render } from '@testing-library/react'
import React from 'react'
import CubingIcon from './CubingIcon'

describe('CubingIcon', () => {
  test('renders the CubingIcon component', () => {
    render(<CubingIcon event="333" selected size="2x" />)
  })
})
