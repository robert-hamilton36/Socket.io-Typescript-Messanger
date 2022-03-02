import React from 'react'
import { shallow } from 'enzyme'
import MessageRendering from '../../../components/room/MessageRendering'

test('<MessageRendering> renders the correct amount of <li>\'s', () => {
  const spoofMessages = [
    { userObj: { name: 'General Kenobi', uid: 200 }, message: 'Hello There' }, { userObj: { name: 'General Grevious', uid: 200 }, message: 'General Kenobi' }
  ]
  const wrapper = shallow(<MessageRendering messages={spoofMessages}/>)
  const li = wrapper.find('li')
  expect(li).toHaveLength(2)
})

test('<MessageRendering> updates the correct amount of <li>\'s on props change', () => {
  const spoofMessages = [
    { userObj: { name: 'General Kenobi', uid: 200 }, message: 'Hello There' }, { userObj: { name: 'General Grevious', uid: 200 }, message: 'General Kenobi' }
  ]
  const wrapper = shallow(<MessageRendering messages={spoofMessages}/>)
  let li = wrapper.find('li')
  expect(li).toHaveLength(2)
  wrapper.setProps(spoofMessages.push({ userObj: { name: 'General Grevious', uid: 200 }, message: 'You are a bold one' }))
  li = wrapper.find('li')
  expect(li).toHaveLength(3)
})
