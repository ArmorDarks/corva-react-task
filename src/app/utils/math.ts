/**
 * Get min value from array
 */
export const getMin = (values: readonly number[]): number =>
  values.reduce((a, b) => a < b ? a : b, Infinity)

/**
 * Get max value from array
 */
export const getMax = (values: readonly number[]): number =>
  values.reduce((a, b) => a > b ? a : b, -Infinity)

/**
 * Get min and max value from array
 * @note That can be made in single reduce, but it will increase cognitive complexity
 */
export const getMinMax = (values: readonly number[]): [number, number] =>
  [getMin(values), getMax(values)]

/**
 * Round number to specified range
 */
export const round = (number: number, to: number) => Math.floor(number / to) * to
