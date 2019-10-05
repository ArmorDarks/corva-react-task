import React from 'react'
import { render } from 'react-dom'
import './main.scss'

import App from './App'

const $root = document.createElement('div')
document.body.appendChild($root)

render(
  <App />,
  $root
)
