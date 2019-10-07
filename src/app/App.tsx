/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { hot } from 'react-hot-loader/root'
import React from 'react'

import { RootState, randomData, RootAction } from './store'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

import { RandomData } from './components'
import './styles/index.scss'

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

type Props =
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

export class App extends React.Component<Props> {
  componentDidMount () {
    // @todo Note that in some cases server might send events with extreme rate
    //       That seems to be out of scope of this task, but in future we might need
    //       to debouce rendering rate
    this.props.subscribeOnRandomData()
  }

  render () {
    const { isConnected, randomData, threshold, updateThreshold } = this.props

    return (
      <RandomData
        isConnected={isConnected}
        randomData={randomData}
        threshold={threshold}
        updateThreshold={updateThreshold}
      />
    )
  }
}

export default hot(connect(mapStateToProps, mapDispatchToProps)(App))
