import { render } from '@testing-library/react'
import React from 'react'
import { UiIcon } from '../index'

describe('UiIcon', () => {
  test('renders the UiIcon component', () => {
    render(<UiIcon name={'wrench'} size="2x" />)
  })
})
