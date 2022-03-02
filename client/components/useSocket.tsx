import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

interface User{
  name: string,
  uid: number
}

interface MessageObject{
  userObj: User,
  message: string
}

const useSocket: (connection?: string) => (MessageObject[] | ((messageObject: MessageObject) => void))[] = (connection = '') => {
  const [messages, setMessages] = useState<MessageObject[]>([])
  const socket = useRef<Socket<DefaultEventsMap> | null>(null)

  useEffect(() => {
    socket.current = io(connection)

    socket.current.on('connect', () => {
      console.log('connected')
    })

    socket?.current.on('chat', (newMessage:MessageObject) => {
      setMessages((messages) => [...messages, newMessage])
    })

    return () => {
      socket?.current?.disconnect()
    }
  }, [])

  const sendMessage = (messageObject: MessageObject) => {
    // console.log(messageObject)
    socket?.current?.emit('chat', messageObject)
  }

  return [messages, sendMessage]
}

export default useSocket
