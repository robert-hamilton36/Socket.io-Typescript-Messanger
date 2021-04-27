import React from 'react'
import MessageInput from './MessageInput'
import MessageRendering from './MessageRendering'
import useSocket from './useSocket'

const App: React.FC = () => {
  const [messages, sendMessage] = useSocket()
  return (
    <>
      <MessageInput sendMessage={sendMessage} />
      <MessageRendering messages={messages} />
    </>
  )
}

export default App
