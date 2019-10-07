/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { Reducer } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RandomData, RandomDataValue } from '../../contracts/RandomData'
import { assertNever } from '../utils/assertNever'
import subscribeOnRandomData from '../services/randomData'

/**
 * Retrieve random data and control its threshold
 */

export const INITIAL_THRESHOLD: RandomDataValue = 15

// ====================================
// State
// ====================================

export type Threshold = RandomDataValue | null

export interface State {
  readonly isConnected: boolean
  // @todo Note that with time it might grow too big. Most likely, we will need to define some limit
  //       after which will start to cut too old data.
  readonly data: readonly RandomData[]
  readonly threshold: Threshold
}

export const initState: State = {
  isConnected: false,
  data: [],
  threshold: INITIAL_THRESHOLD
}

// ====================================
// Action types
// ====================================

export const SET_CONNECTED = 'app/randomData/SET_CONNECTED'

export interface setConnected {
  readonly type: typeof SET_CONNECTED;
  readonly payload: true
}

export const UPDATE_DATA = 'app/randomData/UPDATE_DATA'

export interface UpdateData {
  readonly type: typeof UPDATE_DATA;
  readonly payload: RandomData
}

export const UPDATE_THRESHOLD = 'app/randomData/UPDATE_THRESHOLD'

export interface UpdateThreshold {
  readonly type: typeof UPDATE_THRESHOLD;
  readonly payload: Threshold
}

export type Action =
  setConnected |
  UpdateData |
  UpdateThreshold

// ====================================
// Action creators
// ====================================

export const setConnected = (): Action =>
  ({ type: SET_CONNECTED, payload: true })

export const updateData = (payload: RandomData): Action =>
  ({ type: UPDATE_DATA, payload })

export const updateThreshold = (payload: Threshold): Action =>
  ({ type: UPDATE_THRESHOLD, payload })

// ====================================
// Actions
// ====================================

export const subscribeOnData = (): ThunkAction<Promise<void>, State, {}, Action> =>
  async (dispatch) => {
    await subscribeOnRandomData((data) => dispatch(updateData(data)))
    dispatch(setConnected())
  }

// ====================================
// Reducer
// ====================================

export const reducer: Reducer<State, Action> = (state = initState, action): State => {
  switch (action.type) {
    case SET_CONNECTED:
      return {
        ...state,
        isConnected: action.payload
      }

    case UPDATE_DATA:
      return {
        ...state,
        data: [...(state.data || []), action.payload]
      }

    case UPDATE_THRESHOLD:
      return { ...state, threshold: action.payload }

    default:
      assertNever(action)
      return state
  }
}

// ====================================
// Selectors
// ====================================

export const selectIsConnected = (state: State) => state.isConnected
export const selectData = (state: State) => state.data
export const selectThreshold = (state: State) => state.threshold
