import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavItem } from '../NavItem'

const onClick = jest.fn()

describe('<NavItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with correct info', () => {
    render(<NavItem name='Obi Wan' onClick={onClick}/>)

    const navItem = screen.getByRole('button')

    expect(navItem.textContent).toBe('Obi Wan')
    expect(onClick).toHaveBeenCalledTimes(0)
  })

  it('fires the correct function onClick on li element', () => {
    render(<NavItem name='Obi Wan' onClick={onClick}/>)

    const li = screen.getByRole('button')

    expect(li.nodeName).toBe('LI')
    expect(li.textContent).toBe('Obi Wan')
    expect(onClick).toHaveBeenCalledTimes(0)

    fireEvent.click(li)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('fires the correct function onClick on span element', () => {
    render(<NavItem name='Obi Wan' onClick={onClick}/>)

    const span = screen.getByText('Obi Wan')

    expect(span.nodeName).toBe('SPAN')
    expect(span.textContent).toBe('Obi Wan')
    expect(onClick).toHaveBeenCalledTimes(0)

    fireEvent.click(span)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
