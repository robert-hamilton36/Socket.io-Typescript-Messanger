import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'

const useSocket = ():[string[], (message:string) => void] => {
  const [messages, setMessages] = useState<string[]>([])
  const socket = useRef<Socket<DefaultEventsMap> | null>(null)

  useEffect(() => {
    socket.current = io()

    socket?.current.on('chat', (newMessage:string) => {
      setMessages((messages) => [...messages, newMessage])
    })

    return () => {
      socket?.current.disconnect()
    }
  }, [])

  const sendMessage = (message:string) => {
    if (socket) {
      socket?.current.emit('chat', message)
    }
  }

  return [messages, sendMessage]
}

export default useSocket
