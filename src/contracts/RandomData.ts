export type Timestamp = number
export type RandomDataValue = number

/**
 * Response from the server
 */
export interface RandomData {
  value: RandomDataValue
  timestamp: Timestamp
}
