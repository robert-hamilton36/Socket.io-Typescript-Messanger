import React from 'react'
import { getMessageTime } from '../../date'

interface Props {
  message: MessageObject
}

const getUser = () => {
  return {
    user: {
      name: 'Anakin',
      uid: 'e83c6a51-b7c0-457f-477c-1769c0b51fdd'
    }
  }
}

export const Message: React.FC<Props> = ({ message }) => {
  const { user } = getUser()
  // if message is from someone else the className is 'messageIn'
  const messageFromClass = user.uid === message.user.uid ? 'messageOut' : 'messageIn'
  return (
    <li className={messageFromClass}>
      <div>
        <strong>{message.user.name}</strong>
        <span> {getMessageTime(message.time)}</span>
      </div>
      <div className="triangle"></div>
      <div className='messageBox'>
        <span>{message.message}</span>
      </div>
    </li>
  )
}
