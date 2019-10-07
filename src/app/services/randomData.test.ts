/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

import subscribeOnRandomData from './randomData'

describe('randomData service', () => {
  describe('connect', () => {
    // @todo Well, sockets client isn't that easy testable because of the reconnect and other features
    //       That needs some time and good though to compose it right to make testable.
    //       Hopefully, sockets tests are out of scope of that task
    it.todo('should resolve on connection')
    it.todo('should reject on error')
    it.todo('should invoke callback when receiving data events')
  })

  describe('subscribeOnRandomData', () => {
    const originalEnv = process.env

    // @todo Well, sockets client isn't that easy testable because of the reconnect and other features
    //       That needs some time and good though to compose it right to make testable.
    //       Hopefully, sockets tests are out of scope of that task
    it.todo('should resolve on connection')
    it.todo('should reject on error')
    it.todo('should invoke callback when receiving data events')
    it.todo('should create connection when `url` and `port` specified')

    it('should error when no `URL` environment variable specified', async () => {
      delete process.env.URL
      await expect(subscribeOnRandomData(() => {})).rejects.toThrowErrorMatchingSnapshot()
      process.env.URL = originalEnv.URL
    })

    it('should error when no `PORT` environment variable specified', async () => {
      delete process.env.PORT
      await expect(subscribeOnRandomData(() => {})).rejects.toThrowErrorMatchingSnapshot()
      process.env.PORT = originalEnv.PORT
    })
  })
})
