import React from 'react'

import BarChart from './BarChart'

export default {
  component: BarChart,
  title: 'BarChart'
}

const seriesData = [1, 2, 5, 6, 8, 12, 15, 20, 18, 2, 21, 5]

export const initial = () =>
  <BarChart
    seriesName='Random data'
    seriesData={seriesData}
  />

export const withStep = () =>
  <BarChart
    seriesName='Random data'
    seriesData={seriesData}
    step={12}
  />
