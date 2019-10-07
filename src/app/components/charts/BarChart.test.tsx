/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { shallow } from 'enzyme'

import BarChart, { makeSteps, makeRangesLabels, countDataOccurrencesByStep, distributeDataOccurrencesByStep } from './BarChart'

describe('BarChart', () => {
  it('should render', () => {
    const chart = shallow(
      <BarChart
        seriesName='Random data'
        seriesData={[]}
      />
    )

    expect(chart).toMatchSnapshot()
  })

  it('should render with data', () => {
    const chart = shallow(
      <BarChart
        seriesName='Random data'
        seriesData={[1, 2]}
      />
    )

    expect(chart).toMatchSnapshot()
  })

  describe('makeSteps', () => {
    it('should make steps from data', () => {
      const data = [-58, -51, -21, -3, 2, 33, 43, 44, -25, 43]
      const step = 10

      expect(makeSteps(data, step, step)).toMatchSnapshot()
    })
  })

  describe('makeRangesLabels', () => {
    it('should make labels from data', () => {
      const data = [-58, -51, -21, -3, 2, 33, 43, 44, -25, 43]
      const step = 10

      expect(makeRangesLabels(data, step)).toMatchSnapshot()
    })
  })

  describe('countDataOccurrencesByStep', () => {
    it('should count values occurrences for each step', () => {
      const data = [-58, -51, -21, -3, 2, 33, 43, 44, -25, 43]
      const step = 10

      expect(countDataOccurrencesByStep(data, step)).toMatchSnapshot()
    })
  })

  describe('distributeDataOccurrencesByStep', () => {
    it('should distribute values based on steps', () => {
      const data = [-58, -51, -21, -3, 2, 33, 43, 44, -25, 43]
      const step = 10

      expect(distributeDataOccurrencesByStep(data, step)).toMatchSnapshot()
    })
  })
})
