/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { connect } from 'react-redux'

import { RootState, randomData } from './store'

const mapStateToProps = (state: RootState) => ({
  randomData: randomData.selectData(state.randomData)
})

type Props = ReturnType<typeof mapStateToProps>

const Data: React.FC<Props> = ({ randomData }) => {
  return (
    <div>Data: {randomData}</div>
  )
}

export default connect(mapStateToProps)(Data)
