/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { shallow } from 'enzyme'

import SplineChart from './SplineChart'

describe('SplineChart', () => {
  it('should render', () => {
    const chart = shallow(
      <SplineChart
        seriesName='Random data'
        seriesData={[]}
      />
    )

    expect(chart).toMatchSnapshot()
  })

  it('should render with data', () => {
    const chart = shallow(
      <SplineChart
        seriesName='Random data'
        seriesData={[[1, 2]]}
      />
    )

    expect(chart).toMatchSnapshot()
  })

  it('should render with threshold', () => {
    const chart = shallow(
      <SplineChart
        seriesName='Random data'
        seriesData={[]}
        threshold={15}
      />
    )

    expect(chart).toMatchSnapshot()
  })

  it('should render with limit', () => {
    const chart = shallow(
      <SplineChart
        seriesName='Random data'
        seriesData={[[1, 2]]}
        limit={1}
      />
    )

    expect(chart).toMatchSnapshot()
  })
})
