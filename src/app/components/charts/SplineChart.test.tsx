/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { shallow } from 'enzyme'

import SplineChart from './SplineChart'

describe('SplineChart', () => {
  it('should render', () => {
    const Chart = () =>
      <SplineChart
        seriesName='Random data'
        seriesData={[]}
      />

    expect(shallow(Chart())).toMatchSnapshot()
  })

  it('should render with data', () => {
    const Chart = () =>
      <SplineChart
        seriesName='Random data'
        seriesData={[[1, 2]]}
      />

    expect(shallow(Chart())).toMatchSnapshot()
  })

  it('should render with threshold', () => {
    const Chart = () =>
      <SplineChart
        seriesName='Random data'
        seriesData={[]}
        threshold={15}
      />

    expect(shallow(Chart())).toMatchSnapshot()
  })

  it('should render with limit', () => {
    const Chart = () =>
      <SplineChart
        seriesName='Random data'
        seriesData={[[1, 2]]}
        limit={1}
      />

    expect(shallow(Chart())).toMatchSnapshot()
  })
})
