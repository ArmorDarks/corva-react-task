/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

import subscribeOnRandomData, { SubscribeOnRandomData } from './randomData'

/**
 * A mock implementation of the sockets client to test some internals
 */
const mockIO = (url: string) => {
  const eventsStore: { [key: string]: any[] | undefined } = {}
  const socket = {
    url,
    eventsStore,
    on: (channel: string, payload: any) => {
      const events = eventsStore[channel]
      eventsStore[channel] = [...(events || []), payload]
      return socket
    }
  }

  return socket
}

describe('randomData service', () => {
  describe('SubscribeOnRandomData', () => {
    it('should provide proper url', () => {
      const url = 'example.com'
      const port = '3000'
      const socket: any = SubscribeOnRandomData(mockIO as any, url, port)((_noop) => _noop)
      expect(socket.url).toEqual(`${url}:${port}`)
    })

    it('should trigger callback on new event', () => {
      const channel = 'someChannel'
      const event = 'Some event'
      const socket = mockIO('example.com')
      socket.on(channel, event)
      expect(socket.eventsStore).toEqual({
        [channel]: [event]
      })
    })
  })

  describe('subscribeOnRandomData', () => {
    const originalEnv = process.env

    it('should error when no `URL` environment variable specified', () => {
      delete process.env.URL
      expect(() => subscribeOnRandomData((_noop) => _noop)).toThrowErrorMatchingSnapshot()
      process.env.URL = originalEnv.URL
    })

    it('should error when no `PORT` environment variable specified', () => {
      delete process.env.PORT
      expect(() => subscribeOnRandomData((_noop) => _noop)).toThrowErrorMatchingSnapshot()
      process.env.PORT = originalEnv.PORT
    })
  })
})
