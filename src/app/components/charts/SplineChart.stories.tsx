import React from 'react'

import SplineChart from './SplineChart'

export default {
  component: SplineChart,
  title: 'SplineChart'
}

const seriesData = [[1, 2], [5, 6], [8, 12], [15, 20], [18, 2], [21, 5]] as const

export const initial = () =>
  <SplineChart
    seriesName='Random data'
    seriesData={seriesData}
  />

export const withThreshold = () =>
  <SplineChart
    seriesName='Random data'
    seriesData={seriesData}
    threshold={5}
  />

export const withLimit = () =>
  <SplineChart
    seriesName='Random data'
    seriesData={seriesData}
    limit={Math.ceil(seriesData.length / 2)}
  />
