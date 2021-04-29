import React, { useState } from 'react'

interface Props{
  sendMessage: (message: string) => void
}

const MessageInput: React.FC<Props> = (props) => {
  const [newMessage, setNewMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, message:string) => {
    event.preventDefault()
    props.sendMessage(message)
    setNewMessage('')
  }

  return (
    <form onSubmit={(event) => handleSubmit(event, newMessage)}>
      <input id='message' value={newMessage} onChange={onChange} placeholder="Messsage" />
      <input type="submit" value="Send" />
    </form>
  )
}
export default MessageInput
