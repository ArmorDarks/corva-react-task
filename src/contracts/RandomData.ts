// @todo That file isn't used by server, be careful

export const RANDOM_DATA_SOCKET_EVENT = 'data'

export type Timestamp = number
export type RandomDataValue = number

/**
 * Response from the server
 */
export interface RandomData {
  value: RandomDataValue
  timestamp: Timestamp
}
