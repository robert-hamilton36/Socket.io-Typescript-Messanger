import React from 'react'
import { mount } from 'enzyme'

const TestHook = ({ callback }) => {
  callback()
  return null
}

export const hookSetup = (callback) => {
  mount(<TestHook callback={callback} />)
}
