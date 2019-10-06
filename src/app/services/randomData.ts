/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import io from 'socket.io-client'
import { RANDOM_DATA_CHANNEL, RandomData } from '../../contracts/RandomData'

type OnResponse = (data: RandomData) => any

/**
 * Factory for RandomData socket connector. Mostly need for the ability to inject mock client in tests.
 * @param client Instance of the 'socket.io-client'
 * @param url Url of the server
 * @param port Port of the server
 */
export const SubscribeOnRandomData = (
  client: typeof io,
  url: string,
  port: string
) => (onResponse: OnResponse) =>
  client(`${url}:${port}`)
    .on(RANDOM_DATA_CHANNEL, onResponse)

/**
 * Connect to RandomData provider via sockets and receive messages in callback
 * @param onResponse Callback to be invoked when new data received
*/
export default (onResponse: OnResponse) => {
  if (!process.env.URL) {
    throw new Error('[services/randomData] sockets server `URL` environment variable is not specified')
  }

  if (!process.env.PORT) {
    throw new Error('[services/randomData] sockets server `PORT` environment variable is not specified')
  }

  SubscribeOnRandomData(io, process.env.URL, process.env.PORT)(onResponse)
}
