import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

interface MessageObject{
  name:string,
  message: string
}

const useSocket = (connection = ''):[string[], (messageObject: MessageObject) => void] => {
  const [messages, setMessages] = useState<string[]>([])
  const socket = useRef<Socket<DefaultEventsMap> | null>(null)

  useEffect(() => {
    socket.current = io(connection)

    socket.current.on('connect', () => {
      console.log('connected')
    })

    socket?.current.on('chat', (newMessage:string) => {
      setMessages((messages) => [...messages, newMessage])
    })

    return () => {
      socket?.current.disconnect()
    }
  }, [])

  const sendMessage = (messageObject: MessageObject) => {
    // console.log(messageObject)
    socket?.current.emit('chat', messageObject)
  }

  return [messages, sendMessage]
}

export default useSocket
