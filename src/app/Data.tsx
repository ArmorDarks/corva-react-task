/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { connect } from 'react-redux'

import { RootState, randomData, RootAction } from './store'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { BarChart, SplineChart } from './components'

const mapStateToProps = (state: RootState) => ({
  isConnected: randomData.selectIsConnected(state.randomData),
  randomData: randomData.selectData(state.randomData),
  threshold: randomData.selectThreshold(state.randomData)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, RootAction>) => {
  return bindActionCreators({
    subscribeOnRandomData: randomData.subscribeOnData,
    updateThreshold: randomData.updateThreshold
  }, dispatch)
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const CHART_MAX_SERIES = 10

const Data: React.FC<Props> = ({ subscribeOnRandomData, updateThreshold, isConnected, randomData, threshold }) => {
  return (
    <div>

      <BarChart
        seriesName='Random data occurrences'
        seriesData={randomData.map(({ value }) => value)}
      />

      <SplineChart
        seriesName='Random data'
        seriesData={randomData.map((data) => [data.timestamp, data.value] as const)}
        threshold={threshold === null ? undefined : threshold}
        limit={CHART_MAX_SERIES}
      />
      <button onClick={() => subscribeOnRandomData()}>Start loading data</button>

      <input
        type='number'
        onChange={(e) => updateThreshold(e.target.value === '' ? null : +e.target.value)}
        value={threshold === null ? '' : threshold}
      />

      Data: {isConnected ? 'online' : 'offline'}

      {randomData.map((data) => <div key={data.timestamp}>{data.timestamp} | {data.value}</div>)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
