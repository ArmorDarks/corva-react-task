/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import io from 'socket.io-client'
import { RANDOM_DATA_SOCKET_EVENT, RandomData } from '../../contracts/RandomData'

type OnResponse = (data: RandomData) => any

/**
 * Creates connection via sockets, resolves to a ready socket, or rejects with error
 * @param url Server URL.
 * @param port Server port.
*/
export const connect = (url: string, port: string): Promise<SocketIOClient.Emitter> =>
  new Promise((resolve, reject) => {
    const socket = io(`${url}:${port}`)
      .on('connect', () => resolve(socket))
      .on('connect_error', (error: unknown) => reject(error))
      .on('connect_timeout', (error: unknown) => reject(error))
      .on('error', (error: unknown) => reject(error))
  })

/**
 * Creates connection to RandomData provider via sockets and starts to send
 * events data after connection Promise resolvement.
 * @param onResponse Callback to be invoked when new data received
 * @param url Server URL. Otherwise `URL` env variable will be used
 * @param port Server port. Otherwise `PORT` env variable will be used
*/
export default async (onResponse: OnResponse, url: string | undefined = process.env.URL, port: string | undefined = process.env.PORT) => {
  if (!url) {
    throw new Error('[services/randomData] sockets server `URL` environment variable is not specified')
  }

  if (!port) {
    throw new Error('[services/randomData] sockets server `PORT` environment variable is not specified')
  }

  const socket = await connect(url, port)
  socket.on(RANDOM_DATA_SOCKET_EVENT, onResponse)
}
