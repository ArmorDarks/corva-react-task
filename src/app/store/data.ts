/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { Dispatch, Reducer } from 'redux'
import { assertNever } from '../utils/assertNever'

export const INITIAL_THRESHOLD = 15

// ====================================
// State
// ====================================

export interface State {
  readonly data?: number
  readonly threshold: number
}

export const initState: State = {
  data: undefined,
  threshold: INITIAL_THRESHOLD
}

// ====================================
// Action types
// ====================================

export const UPDATE_DATA = 'app/data/UPDATE_DATA'

export interface UpdateData {
  readonly type: typeof UPDATE_DATA;
  readonly payload: number
}

export const UPDATE_THRESHOLD = 'app/data/UPDATE_THRESHOLD'

export interface UpdateThreshold {
  readonly type: typeof UPDATE_THRESHOLD;
  readonly payload: number
}

export type Action =
  UpdateData |
  UpdateThreshold

// ====================================
// Action creators
// ====================================

export const createUpdateData = (payload: number): UpdateData => {
  return {
    type: UPDATE_DATA,
    payload
  }
}

export const createUpdateThreshold = (payload: number): UpdateThreshold => {
  return {
    type: UPDATE_THRESHOLD,
    payload
  }
}

// ====================================
// Actions
// ====================================

export const updateData = () => (dispatch: Dispatch<Action>): Promise<UpdateData> => {
  return Promise.resolve(dispatch(createUpdateData(15)))
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
      return { ...state, data: action.payload }
    case UPDATE_THRESHOLD:
      return { ...state, data: action.payload }
    default:
      return assertNever(action, new Error('[store/randomData] reached unhandled action'))
  }
}
