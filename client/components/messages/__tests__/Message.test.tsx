import { render, screen } from '@testing-library/react'
import React from 'react'
import { Message } from '../Message'

const testMessage: MessageObject = {
  user: {
    name: 'Obi Wan',
    uid: 'e83c6a51-477c-457f-b7c0-1769c0b51fdd'
  },
  message: 'Hello There!',
  time: '07/03/2022, 9:57:29 pm'
}

describe('<Message />', () => {
  it('renders with correct info', () => {
    render(<Message message={testMessage} />)

    const name = screen.getByText('Obi Wan')
    const message = screen.getByText('Hello There!')

    expect(name).toBeTruthy()
    expect(message).toBeTruthy()
  })
})
