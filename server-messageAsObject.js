const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    },
})

io.on('connection', socket => {
    socket.on('send-chat-message', message => {
        const name = message.name;
        const messageInput = message.messageInput;
        socket.broadcast.emit('chat-message', `${name}:  ${messageInput}`);
    })
})