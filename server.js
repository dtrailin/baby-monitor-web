var io = require('socket.io')();

var isMobile = false,
    isClient = true;
var playerMapping = {};
var currentSockId;
io.on('connect', function(socket) {
  console.log("connected");
  socket.on('cry', function(input) {
    io.emit('cry', {speed: input});
      console.log("crying because..."+input);
    });
});
io.listen(7777);
