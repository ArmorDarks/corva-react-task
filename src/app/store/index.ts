/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import immutableStateInvariant from 'redux-immutable-state-invariant'

import * as randomData from './randomData'

export interface RootState {
  readonly randomData: randomData.State
}

const initRootState: RootState = {
  randomData: randomData.initState
}

const rootReducer = combineReducers<RootState, RootAction>({
  randomData: randomData.reducer
})

export type RootAction = randomData.Action

const middleware = process.env.production
  ? []
  : [immutableStateInvariant()]

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initRootState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store
export { randomData }
