var io = require('socket.io')(8080);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log('Chat message: ' +  msg);
  });
});
