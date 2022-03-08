import React from 'react'
import { MessageHeader } from '../MessageHeader'
import { render, screen } from '@testing-library/react'

const testUser: User = {
  name: 'Obi Wan',
  uid: 'e83c6a51-477c-457f-b7c0-1769c0b51fdd'
}

describe('<MessageHeader />', () => {
  it('renders with the correct values', () => {
    render(<MessageHeader user={testUser} />)

    const header = screen.getByRole('heading')

    expect(header.textContent).toBe('Obi Wan')
  })
})
