import React from 'react'

interface Props{
  messages: MessageObject[]
}

interface MessageObject{
  name:string,
  message: string
}

const MessageRendering: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.messages.map((messageObj, inx) => <li key={messageObj.name + inx}><strong>{messageObj.name}</strong>: {messageObj.message}</li>)}
    </ul>
  )
}

export default MessageRendering
