import React from 'react'
import { shallow } from 'enzyme'
import MessageRendering from '../../components/MessageRendering'

test('<MessageRendering> renders the correct amount of <li>\'s', () => {
  const spoofMessages = ['Hello There', 'General Kenobi']
  const wrapper = shallow(<MessageRendering messages={spoofMessages}/>)
  const li = wrapper.find('li')
  expect(li).toHaveLength(2)
})

test('<MessageRendering> updates the correct amount of <li>\'s on props change', () => {
  const spoofMessages = ['Hello There', 'General Kenobi']
  const wrapper = shallow(<MessageRendering messages={spoofMessages}/>)
  let li = wrapper.find('li')
  expect(li).toHaveLength(2)
  wrapper.setProps(spoofMessages.push('You are a bold one'))
  li = wrapper.find('li')
  expect(li).toHaveLength(3)
})
