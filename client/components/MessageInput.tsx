import React, { useState } from 'react'

interface Props{
  sendMessage: (message: string) => void
}

const MessageInput: React.FC<Props> = (props) => {
  const [newMessage, setNewMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (string: string) => {
    props.sendMessage(string)
    setNewMessage('')
  }

  return (
    <>
      <form onSubmit={() => handleSubmit(newMessage)}>
        <input value={newMessage} onChange={onChange} placeholder="Messsage" />
        <input type="submit" value="submit" />
      </form>
    </>
  )
}

export default MessageInput
