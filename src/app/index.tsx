/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import React from 'react'
import { render } from 'react-dom'

import store from './store'

import { Provider } from 'react-redux'
import App from './App'

const $root = document.createElement('div')
document.body.appendChild($root)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  $root
)
