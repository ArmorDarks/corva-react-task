/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { connect } from 'react-redux'

import { RootState, data } from './store'

const mapStateToProps = (state: RootState) => ({
  data: data.selectData(state.data)
})

type Props = ReturnType<typeof mapStateToProps>

const Data: React.FC<Props> = ({ data }) => {
  return (
    <div>Data: {data}</div>
  )
}

export default connect(mapStateToProps)(Data)
