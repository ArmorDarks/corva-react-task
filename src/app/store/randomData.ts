/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { Dispatch, Reducer } from 'redux'
import { RandomData, RandomDataValue } from '../../contracts/RandomData'
import { assertNever } from '../utils/assertNever'

export const INITIAL_THRESHOLD: RandomDataValue = 15

// ====================================
// State
// ====================================

export interface State {
  readonly data?: readonly RandomData[]
  readonly threshold: RandomDataValue
}

export const initState: State = {
  data: [],
  threshold: INITIAL_THRESHOLD
}

// ====================================
// Action types
// ====================================

export const UPDATE_DATA = 'app/data/UPDATE_DATA'

export interface UpdateData {
  readonly type: typeof UPDATE_DATA;
  readonly payload: RandomData
}

export const UPDATE_THRESHOLD = 'app/data/UPDATE_THRESHOLD'

export interface UpdateThreshold {
  readonly type: typeof UPDATE_THRESHOLD;
  readonly payload: RandomDataValue
}

export type Action =
  UpdateData |
  UpdateThreshold

// ====================================
// Action creators
// ====================================

export const createUpdateData = (payload: RandomData): UpdateData => {
  return {
    type: UPDATE_DATA,
    payload
  }
}

export const createUpdateThreshold = (payload: RandomDataValue): UpdateThreshold => {
  return {
    type: UPDATE_THRESHOLD,
    payload
  }
}

// ====================================
// Actions
// ====================================

export const updateData = () => (dispatch: Dispatch<Action>): Promise<UpdateData> => {
  return Promise.resolve(dispatch(createUpdateData({
    value: 2,
    timestamp: 2
  })))
}

// ====================================
// Selectors
// ====================================

export const selectData = (state: State) => state.data
export const selectThreshold = (state: State) => state.threshold

// ====================================
// Reducer
// ====================================

export const reducer: Reducer<State, Action> = (state = initState, action): State => {
  switch (action.type) {
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
