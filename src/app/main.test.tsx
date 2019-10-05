/* eslint-env jest */

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('main', () => {
  it('should be test', () => {
    expect(shallow(<App />)).toMatchSnapshot()
  })
})
