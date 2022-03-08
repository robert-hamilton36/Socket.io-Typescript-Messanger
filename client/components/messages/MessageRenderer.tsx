import React from 'react'
import { Message } from './Message'

interface Props {
  messages: MessageObject[]
}

export const MessageRenderer: React.FC<Props> = ({ messages }) => {
  return (
    <ul className='messageList'>
      {messages.map((message) => <Message key={message.time} message={message} />)}
    </ul>
  )
}
