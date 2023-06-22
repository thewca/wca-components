import { render } from '@testing-library/react'
import React from 'react'
import { FlagIcon } from '../index'

describe('FlagIcon', () => {
  test('renders the FlagIcon component', () => {
    render(<FlagIcon iso2={'us'} />)
  })
})
