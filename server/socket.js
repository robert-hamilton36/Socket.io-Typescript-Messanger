// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Server } = require('socket.io')

const ioServer = (server) => {
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('new connection:' + socket.id)
    // socket.on('disconnect', (object) => {
    //   console.log('disconnect:')
    // })

    socket.on('chat', (message) => {
      io.sockets.emit('chat', message)
    })
  })
}

module.exports = ioServer
