import React from 'react'
import { shallow, mount } from 'enzyme'
import MessageInput from '../../components/MessageInput'

const sendMessage = (message: string) => {
  console.log(message)
}

test('true is true', () => {
  expect(true).toBeTruthy()
})

test('<MessageInput> renders 1 form with 2 inputs', () => {
  const wrapper = shallow(<MessageInput sendMessage={sendMessage}/>)

  const root = wrapper.find('form')
  expect(root).toHaveLength(1)

  const input = wrapper.find('input')
  expect(input).toHaveLength(2)
})

test('input onChangeEvent calls onChange function properly', () => {
  const wrapper = shallow(<MessageInput sendMessage={sendMessage} />)
  wrapper.find('#message').simulate('change', { target: { value: 'Hello there!' } })
  const inputValue = wrapper.find('#message')
  expect(inputValue.get(0).props.value).toBe('Hello there!')
})

test('submit submits the right info', () => {
  let value = ''

  const changeValue = (message: string) => {
    value = message
  }
  // mount for event.preventDefault()
  const wrapper = mount(<MessageInput sendMessage={changeValue} />)

  wrapper.find('#message').simulate('change', { target: { value: 'General Kenobi' } })
  wrapper.find('form').simulate('submit')

  const inputValue = wrapper.find('#message')
  expect(inputValue.get(0).props.value).toBe('')
  expect(value).toBe('General Kenobi')
})
