import { hot } from 'react-hot-loader/root'
import React from 'react'

import Test from './Test'
import ClassTest from './ClassTest'

const App = () => (
  <h1>
    Hello, world!
    <br />
    <Test>Yea</Test>
    <ClassTest />
  </h1>
)

export default hot(App)
