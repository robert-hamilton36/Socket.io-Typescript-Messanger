import React from 'react'

interface Props{
  messages: MessageObject[]
}

interface User{
  name: string,
  uid: number
}

interface MessageObject{
  userObj: User,
  message: string
}

const MessageRendering: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.messages.map((messageObj, inx) => <li key={messageObj.userObj.name + inx}><strong>{messageObj.userObj.name}</strong>: {messageObj.message}</li>)}
    </ul>
  )
}

export default MessageRendering
