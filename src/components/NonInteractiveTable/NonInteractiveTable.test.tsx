import { render } from '@testing-library/react'
import React from 'react'
import { NonInteractiveTable } from '../index'

describe('NonInteractiveTable', () => {
  test('renders the NonInteractiveTable component', () => {
    render(
      <NonInteractiveTable
        header={[
          { text: '#' },
          { text: 'Name' },
          { text: 'Result' },
          { text: 'Citizen of' },
          { text: 'Competition' },
        ]}
        footer={[]}
        rows={[
          [
            { text: '1' },
            {
              text: 'Max Park',
              link: 'https://worldcubeassociation.org/persons/2012PARK03',
            },
            { text: '3.13' },
            { text: 'United States', flag: 'us' },
            {
              text: 'Pride in Long Beach 2023',
              flag: 'us',
              link: 'https://www.worldcubeassociation.org/competitions/PrideInLongBeach2023',
            },
          ],
          [
            { text: '2' },
            {
              text: 'Yusheng Du (杜宇生)',
              link: 'https://www.worldcubeassociation.org/persons/2015DUYU01',
            },
            { text: '3.47' },
            { text: 'China', flag: 'cn' },
            {
              text: 'Wuhu Open 2018',
              flag: 'cn',
              link: 'https://www.worldcubeassociation.org/competitions/WuhuOpen2018',
            },
          ],
        ]}
      />
    )
  })
})
