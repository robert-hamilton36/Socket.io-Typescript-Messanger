import React, { useState } from 'react'

interface Props {
  callback: (message: string) => void
}

export const MessageInput: React.FC<Props> = ({ callback }) => {
  const [message, setMessage] = useState('')
  const handleClick = () => {
    callback(message)
    setMessage('')
  }
  return (
    <footer className='messageFooter'>
      <textarea className='messageInput' placeholder="Type message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className='messageButton' onClick={handleClick}>Send</button>
    </footer>
  )
}
