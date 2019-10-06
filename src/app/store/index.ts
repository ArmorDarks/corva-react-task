/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { combineReducers, createStore } from 'redux'
import * as randomData from './randomData'

export interface RootState {
  readonly randomData: randomData.State
}

const initRootState: RootState = {
  randomData: randomData.initState
}

export type RootAction = randomData.Action

const store = createStore(
  combineReducers<RootState, RootAction>({
    randomData: randomData.reducer
  }),
  initRootState
)

export default store
export { randomData }
