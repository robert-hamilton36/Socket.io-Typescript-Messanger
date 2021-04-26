/* eslint-disable @typescript-eslint/no-var-requires */
const server = require('./server')
const ioServer = require('./socket-io')

const PORT = process.env.PORT || 3000

const serverObj = server.listen(PORT, () => {
  console.log('Server listening on port', PORT)
})

ioServer(serverObj)
