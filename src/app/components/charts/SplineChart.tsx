/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'

import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type Timestamp = number

export interface Props {
  readonly seriesName: string
  readonly seriesData: ReadonlyArray<readonly [Timestamp, number]>
  readonly threshold?: number
  readonly limit?: number
}

/**
 * A bar chart
 * X axis displays time of occurrence
 * Y axis display series values
 */
const SplineChart = ({ seriesName, seriesData, threshold, limit }: Props) => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: 'spline'
        },
        title: {
          // Intentionally. Use regular HTML heading to set it
          text: undefined
        },
        time: {
          useUTC: false
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        xAxis: {
          type: 'datetime',
          tickPixelInterval: 150
        },
        yAxis: {
          tickInterval: 5,
          plotLines: [{
            value: threshold,
            width: 2,
            color: 'red'
          }]
        },
        series: [{
          name: seriesName,
          data: limit ? seriesData.slice(-limit) : seriesData
        }]
      } as any}
    />
  )
}

export default SplineChart
