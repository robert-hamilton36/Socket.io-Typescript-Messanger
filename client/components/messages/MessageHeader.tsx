import React from 'react'

interface Props {
  user: User
}

export const MessageHeader: React.FC<Props> = ({ user }) => {
  return (
    <header className='messageHeader'>
      <h1>{user.name}</h1>
    </header>
  )
}
