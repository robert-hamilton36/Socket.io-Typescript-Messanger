import React from 'react'
import { MessageInput } from '../MessageInput'
import { fireEvent, render, screen } from '@testing-library/react'

const callback = jest.fn()

describe('MessageInput', () => {
  it('renders with correct values', () => {
    render(<MessageInput callback={callback}/>)

    const button = screen.getByRole('button')
    const textArea = screen.getByRole('textbox')

    expect(callback).toHaveBeenCalledTimes(0)
    expect(button.textContent).toBe('Send')
    expect(textArea.textContent).toBe('')
  })

  it('correctly changes the text when typed', () => {
    render(<MessageInput callback={callback}/>)

    const textArea = screen.getByRole('textbox')

    expect(textArea.textContent).toBe('')

    fireEvent.change(textArea, { target: { value: 'Hello Ther' } })

    expect(callback).toHaveBeenCalledTimes(0)
    expect(textArea.textContent).toBe('Hello Ther')
  })

  it('fires the callback prop with correct arguments', () => {
    render(<MessageInput callback={callback}/>)

    const button = screen.getByRole('button')
    let textArea = screen.getByRole('textbox')

    expect(textArea.textContent).toBe('')
    expect(button.textContent).toBe('Send')
    expect(callback).toHaveBeenCalledTimes(0)

    fireEvent.change(textArea, { target: { value: 'Hello There' } })

    expect(callback).toHaveBeenCalledTimes(0)
    expect(textArea.textContent).toBe('Hello There')

    fireEvent.click(button)

    textArea = screen.getByRole('textbox')

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback.mock.calls[0][0]).toBe('Hello There')
    expect(textArea.textContent).toBe('')
  })
})
