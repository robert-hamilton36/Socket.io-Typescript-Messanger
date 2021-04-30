import React, { useState } from 'react'

interface Props{
  sendMessage: (messageObject: MessageObject) => void,
  name: string
}

interface MessageObject{
  name:string,
  message: string
}

const MessageInput: React.FC<Props> = (props) => {
  const [newMessage, setNewMessage] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, message:string) => {
    event.preventDefault()
    props.sendMessage({
      name: props.name,
      message
    })
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
