/* eslint no-unused-vars: "off" */
/* eslint @typescript-eslint/no-unused-vars: "error" */

import { hot } from 'react-hot-loader/root'
import React from 'react'

import Data from './Data'
import './styles/index.scss'

const App = () => (
  <div>
    <h1>Hello, world!</h1>
    <Data />
  </div>
)

export default hot(App)
