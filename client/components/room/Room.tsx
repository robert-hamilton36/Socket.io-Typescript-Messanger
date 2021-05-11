import React from 'react'
import useSocket from '../useSocket'
import MessageInput from './MessageInput'
import MessageRendering from './MessageRendering'

const Room: React.FC = () => {
  const [messages, sendMessage] = useSocket()

  return (
    <>
      <MessageRendering messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </>
  )
}

export default Room
