/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { reducer, initState, updateData, updateThreshold } from './randomData'

describe('randomData reducer', () => {
  describe('with no action', () => {
    it('should return same state', () => {
      const newState = reducer(undefined, {} as any)
      expect(newState).toEqual(initState)
    })
  })

  describe('with UpdateData action', () => {
    it('should change data', () => {
      const newData = { value: 5, timestamp: 232323 }
      const action = updateData(newData)

      const newState = reducer(undefined, action)

      expect(newState).toEqual({
        ...initState,
        data: [...(initState.data || []), newData]
      })
    })
  })

  describe('with UpdateThreshold action', () => {
    it('should change threshold', () => {
      const newThreshold = 5
      const action = updateThreshold(newThreshold)

      const newState = reducer(undefined, action)

      expect(newState).toEqual({
        ...initState,
        threshold: newThreshold
      })
    })
  })
})
