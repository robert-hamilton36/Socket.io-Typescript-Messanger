import React from 'react'
import { shallow, mount } from 'enzyme'

import AskName from '../../components/AskName'

test('<AskName> renders 1 form with 2 inputs', () => {
  let name = ''

  const setName = (newName:string) => {
    name = newName
  }
  const wrapper = shallow(<AskName setMainName={setName}/>)

  const root = wrapper.find('form')
  expect(root).toHaveLength(1)

  const input = wrapper.find('input')
  expect(input).toHaveLength(2)
  expect(name).toBe('')
})

test('name is correctly updated', () => {
  let name = ''

  const setName = (newName:string) => {
    name = newName
  }
  const wrapper = shallow(<AskName setMainName={setName}/>)
  wrapper.find('#display-name').simulate('change', { target: { value: 'General Kenobi' } })
  const inputValue = wrapper.find('#display-name')
  expect(inputValue.get(0).props.value).toBe('General Kenobi')
  expect(name).toBe('')
})

test('submit button submits the right info', () => {
  let name = ''

  const setName = (newName:string) => {
    name = newName
  }
  // mount for event.preventDefault()
  const wrapper = mount(<AskName setMainName={setName}/>)

  wrapper.find('#display-name').simulate('change', { target: { value: 'General Kenobi' } })
  wrapper.find('form').simulate('submit')

  const inputValue = wrapper.find('#display-name')
  expect(inputValue.get(0).props.value).toBe('')
  expect(name).toBe('General Kenobi')
})
