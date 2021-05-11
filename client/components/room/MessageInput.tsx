import React, { useState, useContext } from 'react'
import { UserContext } from '../useUserContext'

interface Props{
  sendMessage: (messageObject: MessageObject) => void,
  name: string
}

interface MessageObject{
  userObj: User,
  message: string
}

interface User{
  name: string,
  uid: number
}

const MessageInput: React.FC<Props> = (props) => {
  const [newMessage, setNewMessage] = useState('')
  const userObj = useContext(UserContext)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  console.log(userObj)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, message:string) => {
    event.preventDefault()
    props.sendMessage({
      userObj,
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
