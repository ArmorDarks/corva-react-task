import React from 'react'

import RandomData from './RandomData'

export default {
  component: RandomData,
  title: 'RandomData'
}

const seriesData = [{
  value: -59.168341304150964,
  timestamp: 1570474691564
}, {
  value: -81.39908194859946,
  timestamp: 1570474694403
}, {
  value: 90.20003681572823,
  timestamp: 1570474697507
}, {
  value: -36.39152397661461,
  timestamp: 1570474700740
}, {
  value: -87.92854780324105,
  timestamp: 1570474707417
}, {
  value: -78.59754943742128,
  timestamp: 1570474711327
}, {
  value: -54.398113089246976,
  timestamp: 1570474712735
}, {
  value: 20.69819072092662,
  timestamp: 1570474718902
}, {
  value: -37.775509709049885,
  timestamp: 1570474721594
}] as const

export const initial = () =>
  <RandomData
    randomData={seriesData}
    updateThreshold={(() => {}) as any}
  />

export const withIsConnected = () =>
  <RandomData
    isConnected
    randomData={seriesData}
    updateThreshold={(() => {}) as any}
  />

export const withThreshold = () =>
  <RandomData
    isConnected
    randomData={seriesData}
    threshold={15}
    updateThreshold={(() => {}) as any}
  />
