import React from 'react'
import useSocket from '../useSocket'
import MessageInput from './MessageInput'
import MessageRendering from './MessageRendering'

interface Props{
  name:string
}

const Room: React.FC<Props> = ({ name }) => {
  const [messages, sendMessage] = useSocket()

  return (
    <>
      <MessageRendering messages={messages} />
      <MessageInput sendMessage={sendMessage} name={name}/>
    </>
  )
}

export default Room
