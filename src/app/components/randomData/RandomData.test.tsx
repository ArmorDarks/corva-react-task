/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { shallow } from 'enzyme'

import RandomData from './RandomData'

describe('RandomData', () => {
  it('should render', () => {
    const Component = () =>
      <RandomData
        isConnected
        randomData={[]}
        updateThreshold={(() => {}) as any}
      />

    expect(shallow(Component())).toMatchSnapshot()
  })

  it('should render with data', () => {
    const Component = () =>
      <RandomData
        isConnected
        randomData={[{
          value: -59.168341304150964,
          timestamp: 1570474691564
        }, {
          value: -81.39908194859946,
          timestamp: 1570474694403
        }]}
        updateThreshold={(() => {}) as any}
      />

    expect(shallow(Component())).toMatchSnapshot()
  })

  it('should update threshold', () => {
    const mockUpdateThreshold = jest.fn()

    const component = shallow(
      <RandomData
        isConnected
        randomData={[{
          value: -59.168341304150964,
          timestamp: 1570474691564
        }]}
        threshold={15}
        updateThreshold={mockUpdateThreshold}
      />
    )

    const $input = component.find('input')

    const value = 23
    $input.simulate('change', { target: { value } })

    expect(mockUpdateThreshold.mock.calls).toEqual([[value]])
  })
})
