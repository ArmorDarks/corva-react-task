/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { combineReducers, createStore } from 'redux'
import * as data from './data'

export interface RootState {
  readonly data: data.State
}

const initRootState: RootState = {
  data: data.initState
}

export type RootAction = data.Action

const store = createStore(
  combineReducers<RootState, RootAction>({
    data: data.reducer
  }),
  initRootState
)

export default store
export { data }
