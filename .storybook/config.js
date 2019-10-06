import { configure } from '@storybook/react'

configure(
  require.context(
    '../src',
    true,
    /\.stories\.m?(t|j)sx?$/
  ),
  module
)
