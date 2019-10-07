/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import * as math from './math'

describe('Math', () => {
  describe('getMinValue', () => {
    it('should get min value from array', () => {
      expect(math.getMin([5, 3, 20])).toBe(3)
    })

    it('should work with negative values', () => {
      expect(math.getMin([5, 3, -20])).toBe(-20)
    })
  })

  describe('getMaxValue', () => {
    it('should get max value from array', () => {
      expect(math.getMax([5, 3, 20])).toBe(20)
    })

    it('should work with negative values', () => {
      expect(math.getMax([5, 3, -20])).toBe(5)
    })
  })

  describe('getMax', () => {
    it('should get min and max values from array', () => {
      expect(math.getMinMax([5, 3, 20])).toEqual([3, 20])
    })

    it('should work with negative values', () => {
      expect(math.getMinMax([5, 3, -20])).toEqual([-20, 5])
    })
  })

  describe('round', () => {
    it('should round value to specified range', () => {
      expect(math.round(5, 10)).toBe(0)
      expect(math.round(-5, 10)).toBe(-10)
      expect(math.round(55, 10)).toBe(50)
      expect(math.round(-55, 10)).toBe(-60)
      expect(math.round(50, 10)).toBe(50)
      expect(math.round(-50, 10)).toBe(-50)
    })
  })
})
