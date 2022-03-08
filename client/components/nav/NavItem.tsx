import React from 'react'

interface Props {
  name: string;
  onClick: () => void;
}

export const NavItem: React.FC<Props> = ({ name, onClick }) => {
  return (
    <li className='contactItem' onClick={onClick} role="button">
      <span>{name}</span>
    </li>
  )
}
