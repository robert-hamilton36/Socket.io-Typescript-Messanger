// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Server } = require('socket.io')

const ioServer = (server) => {
  const io = new Server(server)

  io.on('connect', (socket) => {
    console.log('new connection:' + socket.id)
    // socket.on('disconnect', (object) => {
    //   console.log('disconnect:')
    //   console.log(object)
    // })

    socket.on('chat', (message) => {
      console.log(message)
      io.sockets.emit('chat', message)
    })
  })
}

module.exports = ioServer
