/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import {
  reducer,
  initState,
  updateData,
  updateThreshold,
  setConnected,
  selectIsConnected,
  selectData,
  selectThreshold
} from './randomData'

describe('randomData', () => {
  describe('action', () => {
    describe('setConnected', () => {
      it('should create action', () => {
        expect(setConnected()).toMatchSnapshot()
      })
    })

    describe('updateData', () => {
      it('should create action', () => {
        expect(updateData({ timestamp: 1, value: 2 })).toMatchSnapshot()
      })
    })

    describe('updateThreshold', () => {
      it('should create action', () => {
        expect(updateThreshold(2)).toMatchSnapshot()
      })
    })

    describe('subscribeOnData', () => {
      // @todo That one harder to test due to the sockets, needs some more tinkering.
      //       Let's leave it out of scope of this task :)
      it.todo('should create action')
    })
  })

  describe('reducer', () => {
    describe('with no action', () => {
      it('should return same state', () => {
        const newState = reducer(undefined, {} as any)
        expect(newState).toEqual(initState)
      })
    })

    describe('with setConnected action', () => {
      it('should change data', () => {
        const action = setConnected()
        const newState = reducer(undefined, action)

        expect(newState).toEqual({
          ...initState,
          isConnected: true
        })
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

  describe('selector', () => {
    describe('selectIsConnected', () => {
      it('should create action', () => {
        const isConnected = true

        expect(selectIsConnected({
          ...initState,
          isConnected
        })).toBe(isConnected)
      })
    })

    describe('selectData', () => {
      it('should create action', () => {
        const data = [{ timestamp: 1, value: 2 }]

        expect(selectData({
          ...initState,
          data
        })).toBe(data)
      })
    })

    describe('selectThreshold', () => {
      it('should create action', () => {
        const threshold = 15

        expect(selectThreshold({
          ...initState,
          threshold
        })).toBe(threshold)
      })
    })
  })
})
