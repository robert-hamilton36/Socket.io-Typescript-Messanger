import React from 'react'
import { shallow } from 'enzyme'
import Room from '../../../components/room/Room'

test('<Room> renders properly', () => {
  const wrapper = shallow(<Room />)
  expect(wrapper).toBeTruthy()
})
