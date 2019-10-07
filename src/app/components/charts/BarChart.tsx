/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import range from 'lodash.range'
import { getMinMax, round } from '../../utils/math'

import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export type SeriesData = readonly number[]
export type Categories = readonly string[]

/**
 * Produces array of steps by taking into accounting rounding number, like `[-10, 0, 10]`
 * with step `10` and rounding to `10`
 */
export const makeSteps = (data: SeriesData, step: number, roundTo: number): readonly number[] => {
  const [min, max] = getMinMax(data)
  const roundMin = round(min, roundTo)
  const roundMax = round(max, roundTo)

  return range(roundMin, roundMax + step, step)
}

/**
 * Produces array of ranges labels for each step, like `['-10 - 0', '0 - 10', '10 - 20']`
 */
export const makeRangesLabels = (data: SeriesData, step: number): Categories =>
  makeSteps(data, step, step)
    .map((value) => `${value} - ${value + step}`)

interface DataOccurrences {
  [key: string]: number | undefined
}

/**
 * Counts number of occurrences for each step, like `{ -30: 1, 20: 2, }` for `[-31, 20, 22]`
 */
export const countDataOccurrencesByStep = (data: SeriesData, step: number): DataOccurrences => {
  return data
    .reduce((result, value) => {
      const valueRange = round(value, step)
      const currentOccurrences = result[valueRange]
      const occurrences = currentOccurrences ? currentOccurrences + 1 : 1

      return {
        ...result,
        [valueRange]: occurrences
      }
    }, {} as DataOccurrences)
}

/**
 * Distributes data occurrences in array based on steps, like `[1, 0, 3]` for
 * data with step of `10`, with min value `-10` and max `10` (3 steps)
 */
export const distributeDataOccurrencesByStep = (data: SeriesData, step: number): SeriesData => {
  const steps = makeSteps(data, step, step)
  const occurrences = countDataOccurrencesByStep(data, step)

  return steps
    .map((currentStep) => {
      const value = occurrences[currentStep]
      return value || 0
    })
}

export interface Props {
  readonly seriesName: string
  // @todo Note that it actually should be ReadonlyArray<[number, number]>,
  //       but TS can't infer such strict types from dynamic values
  readonly seriesData: SeriesData
  readonly step: number
}

/**
 * A bar chart
 * X axis displays range categories (10 - 0, 0 - 10, 10 - 20)
 * Y axis display amount of occurrences in range
 */
const BarChart = ({ seriesName, seriesData, step }: Props) => {
  const categories = makeRangesLabels(seriesData, step)
  const distributedData = distributeDataOccurrencesByStep(seriesData, step)

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        chart: {
          type: 'column'
        },
        title: {
          text: undefined
        },
        xAxis: {
          categories
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Occurrences'
          }
        },
        series: [{
          name: seriesName,
          data: distributedData
        }]
      } as any}
    />
  )
}

BarChart.defaultProps = {
  step: 10
}

export default BarChart
