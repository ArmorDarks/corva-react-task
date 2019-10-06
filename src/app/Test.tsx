import React from 'react'

export interface Props {
  children: string
}

export default (props: Props) => {
  return <div>{props.children}</div>
}
