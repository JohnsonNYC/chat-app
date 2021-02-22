const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server) //connecting HTTP with Sockets

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname,'../public')

io.on('connection', () => {
  console.log('New Socket Connection')
})

app.use(express.static(publicDirectoryPath))

server.listen(port, () => {
  console.log('Listening on port:' + port)
})