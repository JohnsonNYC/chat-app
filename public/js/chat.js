const socket = io() // Send and recieve event from server to client

socket.on('countUpdated', () => {
  console.log('The count has been updated!')
})