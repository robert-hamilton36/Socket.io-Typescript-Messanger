import { createServer } from 'http'
import { Server } from 'socket.io'
import Client from 'socket.io-client'

import { hookSetup } from '../setup/HookSetup'
import useSocket from '../../components/useSocket'

describe('my awesome test works just perfectly', () => {
  let io, serverSocket, clientSocket
  let messages, sendMessage

  beforeAll((done) => {
    const httpServer = createServer()
    io = new Server(httpServer)
    httpServer.listen(() => {
      const port = httpServer.address().port
      console.log(port)
      clientSocket = new Client(`http://localhost:${port}`)
      hookSetup(() => {
        [messages, sendMessage] = useSocket(`http://localhost:${port}`)
      })
      io.on('connection', (socket) => {
        serverSocket = socket
      })
      io.on('connect', (socket) => {
        console.log('new connection:' + socket.id)
      })
      clientSocket.on('connect', done)
    })
  })

  afterAll(() => {
    io.close()
    clientSocket.close()
  })

  test('send', (done) => {
    sendMessage('hello')
    clientSocket.on('chat', (arg) => {
      console.log('arguments')
      console.log(arg)
      expect(arg).toBe('hello')
      expect(messages[0]).toBe('hello')
      done()
    })
    serverSocket.emit('chat', 'hello')
  })

  // test('should work', (done) => {
  //   clientSocket.on('hello', (arg) => {
  //     expect(arg).toBe('world')
  //     done()
  //   })
  //   serverSocket.emit('hello', 'world')
  // })

  // test('should work (with ack)', (done) => {
  //   serverSocket.on('hi', (cb) => {
  //     cb('hola')
  //   })
  //   clientSocket.emit('hi', (arg) => {
  //     expect(arg).toBe('hola')
  //     done()
  //   })
  // })
})
