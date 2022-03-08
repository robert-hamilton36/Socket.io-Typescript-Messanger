import { render, screen } from '@testing-library/react'
import React from 'react'
import { MessageRenderer } from '../MessageRenderer'

jest.mock('../MessageRenderer')

const MockedMessage = MessageRenderer as jest.Mock

const testMessages: MessageObject[] = [{
  user: {
    name: 'Obi Wan',
    uid: 'e83c6a51-477c-457f-b7c0-1769c0b51fdd'
  },
  message: 'Hello There!',
  time: '07/03/2022, 9:57:29 pm'
}]

describe('<Messages />', () => {
  beforeAll(() => {
    MockedMessage.mockReturnValue(<h1>Message</h1>)
  })
  it('renders correctly', () => {
    render(<MessageRenderer messages={testMessages}/>)

    const messages = screen.getAllByText('Message')

    expect(messages).toHaveLength(1)
    expect(MockedMessage).toHaveBeenCalledTimes(1)
    expect(MockedMessage.mock.calls[0][0]).toEqual({ messages: [testMessages[0]] })
  })
})
