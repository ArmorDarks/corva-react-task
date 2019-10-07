/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { connect } from 'react-redux'

import { RootState, randomData, RootAction } from './store'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import * as Highcharts from 'highcharts'

import HighchartsReact from 'highcharts-react-official'

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

const Data: React.FC<Props> = ({ subscribeOnRandomData, updateThreshold, isConnected, randomData, threshold }) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Random Data'
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
            name: 'Random Data',
            data: randomData.map((data) => [data.timestamp, data.value]).slice(-20)
          }]
        } as any}
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
