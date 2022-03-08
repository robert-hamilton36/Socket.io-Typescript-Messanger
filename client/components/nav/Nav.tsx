import React from 'react'
import { NavItem } from './NavItem'

export const Nav: React.FC = () => {
  const contacts = ['Robbie', 'Hugh', 'Katie', 'Sophie']

  const handleClick = () => {
    console.log('handleNav')
  }

  return (
    <nav className='contactContainer'>
      <ul className='contactList'>
        {contacts.map((contact) => <NavItem key={contact} name={contact} onClick={handleClick} />)}
      </ul>
    </nav>
  )
}
