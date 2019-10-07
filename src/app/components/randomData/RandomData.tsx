/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'

import { BarChart, SplineChart } from '..'
import { RandomData as RandomDataContract } from '../../../contracts/RandomData'
import { Threshold, updateThreshold } from '../../store/randomData'

const CHART_MAX_SERIES = 10

export interface Props {
  isConnected?: boolean,
  randomData: readonly RandomDataContract[],
  threshold?: Threshold,
  updateThreshold: typeof updateThreshold,
}

/**
 * Display Random Data charts and some additional controls
 */
const RandomData: React.FC<Props> = ({ isConnected, randomData, threshold, updateThreshold }) => {
  return (
    <div className='h-margin-top+'>

      <div className='Wrapper h-flex h-flex--wrap h-flex-x--between h-flex-y--center h-margin-ends+'>

        <div className='h-flex h-flex--wrap h-flex-y--center'>
          <h1 className='h-inline h-margin-ends'>Random Data Stats</h1>

          <div className='h-margin-left h-margin-ends'>
            {isConnected ? 'online' : 'offline'}
          </div>

        </div>

        <div className='h-margin-ends'>
          <label className='h-text- h-margin-right-' htmlFor='threshold'>Threshold</label>
          <input
            type='number'
            id='threshold'
            name='threshold'
            onChange={(e) => updateThreshold(e.target.value === '' ? null : +e.target.value)}
            value={threshold === null ? '' : threshold}
          />
        </div>

      </div>

      <div className='o-grid'>

        <div className='o-grid__iterm h-1/2'>
          <BarChart
            seriesName='Random data occurrences'
            seriesData={randomData.map(({ value }) => value)}
          />
        </div>

        <div className='o-grid__iterm h-1/2'>
          <SplineChart
            seriesName='Random data'
            seriesData={randomData.map((data) => [data.timestamp, data.value] as const)}
            threshold={threshold === null ? undefined : threshold}
            limit={CHART_MAX_SERIES}
          />
        </div>

      </div>

    </div>
  )
}

export default RandomData
