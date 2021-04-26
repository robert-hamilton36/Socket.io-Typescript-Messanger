import React, { useState } from 'react'
import useSocket from '../useSocket'
import MessageInput from './MessageInput'
import MessageInputNotForm from './MessageInputNotForm'

//Werid behaviour:
//Using <Form> causes odd behaviour to the customSocketHook

const App: React.FC = () => {
  const [messages, sendMessage] = useSocket()
  const [newMessage, setNewMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const onSend = (string: string) => {
    sendMessage(string)
    setNewMessage('')
  }

  const childSendMessages = (message: string) => {
    sendMessage(message)
  }

  return (
    <>
      <h1>App has arrived</h1>
      <input value={newMessage} onChange={onChange} />
      <button onClick={() => onSend(newMessage)}>Send</button>
      <MessageInput sendMessage={childSendMessages} />
      <MessageInputNotForm sendMessage={sendMessage} />
      <ul>
        {messages.map((word, inx) => <li key={word + inx}>{word}</li>)}
      </ul>
    </>
  )
}
export default App
