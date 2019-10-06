/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { connect } from 'react-redux'

import { RootState, randomData, RootAction } from './store'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

const mapStateToProps = (state: RootState) => ({
  randomData: randomData.selectData(state.randomData)
})

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, {}, RootAction>) => {
  return bindActionCreators({ subscribeOnRandomData: randomData.subscribeOnData }, dispatch)
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const Data: React.FC<Props> = ({ subscribeOnRandomData, randomData }) => {
  return (
    <div>
      <button onClick={() => subscribeOnRandomData()}>Start loading data</button>
      Data:
      {randomData.map((data) => <div key={data.timestamp}>{data.value}</div>)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Data)
