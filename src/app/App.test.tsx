/* eslint-env jest */
/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  it('should render', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
