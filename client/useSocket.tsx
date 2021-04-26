import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'

const useSocket = ():[string[], (message:string) => void] => {
  const [messages, setMessages] = useState<string[]>([])
  // const socket = useRef(io())
  const socket = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>()

  useEffect(() => {
    socket.current = io()

    socket.current.on('connect', () => {
      console.log('connected')
    })

    socket.current.on('chat', (newMessage:string) => {
      setMessages((messages) => [...messages, newMessage])
    })

    return () => {
      socket.current.disconnect()
    }
  }, [])

  console.log(messages)

  const sendMessage = (message:string) => {
    console.log(message)
    socket.current.emit('chat', message)
  }

  return [messages, sendMessage]
}

export default useSocket
