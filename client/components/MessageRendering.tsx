import React from 'react'

interface Props{
  messages: string[]
}

const MessageRendering: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.messages.map((message, inx) => <li key={message + inx}>{message}</li>)}
    </ul>
  )
}

export default MessageRendering
