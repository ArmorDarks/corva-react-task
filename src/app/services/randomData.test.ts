/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */

import subscribeOnRandomData, { connect } from './randomData'

describe('randomData service', () => {
  describe('connect', () => {
    it.todo('should resolve on connection')

    it('should reject on error', () => {
      return expect(connect('nope', '400')).rejects.toMatchSnapshot()
    })

    it.todo('should invoke callback when receiving data events')
  })

  describe('subscribeOnRandomData', () => {
    const originalEnv = process.env

    it.todo('should resolve on connection')

    it('should reject on error', () => {
      return expect(subscribeOnRandomData(() => {}, 'nope', '400')).rejects.toMatchSnapshot()
    })

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
