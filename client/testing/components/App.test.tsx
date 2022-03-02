import React from 'react'
import { shallow } from 'enzyme'

import App from '../../components/App'
import AskName from '../../components/AskName'
import Room from '../../components/room/Room'

test('true is true', () => {
  expect(true).toBeTruthy()
})

test('with no userObj App renders <AskName /> and not <Room />', () => {
  const wrapper = shallow(<App/>)

  const askNameWrap = wrapper.find(AskName)
  const roomWrap = wrapper.find(Room)
  expect(askNameWrap).toHaveLength(1)
  expect(roomWrap).toHaveLength(0)
})

test('when userObj has name <Room/> is rendered, <AskName /> is not', () => {
  const wrapper = shallow(<App/>)

  let askNameWrap = wrapper.find(AskName)
  let roomWrap = wrapper.find(Room)
  expect(askNameWrap).toHaveLength(1)
  expect(roomWrap).toHaveLength(0)

  console.log(wrapper.instance())

  askNameWrap = wrapper.find(AskName)
  roomWrap = wrapper.find(Room)
  expect(askNameWrap).toHaveLength(0)
  expect(roomWrap).toHaveLength(1)
})
