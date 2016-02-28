var io = require('socket.io')();
io.on('connect', function(socket) {
  console.log("connected");
  socket.on('cry', function(input) {
    console.log("crying because..."+input);
    io.emit('cry', {speed: input});
    });
});
io.listen(7777);
