import React from 'react'
import { MessageHeader } from './MessageHeader'
import { MessageInput } from './MessageInput'
import { MessageRenderer } from './MessageRenderer'

export const MessageContainer: React.FC = () => {
  const messages = [{
    user: {
      name: 'Obi Wan',
      uid: 'e83c6a51-477c-457f-b7c0-1769c0b51fdd'
    },
    message: 'Hello There!',
    time: '07/03/2022, 9:47 pm'
  },
  {
    user: {
      name: 'Anakin',
      uid: 'e83c6a51-b7c0-457f-477c-1769c0b51fdd'
    },
    message: 'General Kenobi',
    time: '07/03/2022, 9:49 pm'
  },
  {
    user: {
      name: 'Anakin',
      uid: 'e83c6a51-b7c0-457f-477c-1769c0b51fdd'
    },
    message: 'You are a bold one',
    time: '07/03/2022, 9:50 pm'
  },
  {
    user: {
      name: 'General Grevious',
      uid: 'e83c6a51-1769-c07f-1fdc-b7c0b545d477'
    },
    message: 'Hey thats my line',
    time: '07/03/2022, 9:54 pm'
  }]
  const user = {
    name: 'Obi Wan',
    uid: 'e83c6a51-477c-457f-b7c0-1769c0b51fdd'
  }
  const handleClick = (text: string) => {
    console.log(text)
  }
  return (
    <>
      <article className='messageContent'>
        <MessageHeader user={user}/>
        <MessageRenderer messages={messages} />
        <MessageInput callback={handleClick}/>
      </article>
    </>
  )
}
