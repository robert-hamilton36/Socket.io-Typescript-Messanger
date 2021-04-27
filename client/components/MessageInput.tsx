import React, { useState } from 'react'

interface Props{
  sendMessage: (message: string) => void
}

const MessageInput: React.FC<Props> = (props) => {
  const [newMessage, setNewMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = () => {
    props.sendMessage(newMessage)
    setNewMessage('')
  }

  return (
    <>
      <input value={newMessage} onChange={onChange} placeholder="Messsage" />
      <button onClick={handleSubmit}>Send</button>
    </>
  )
}
export default MessageInput
