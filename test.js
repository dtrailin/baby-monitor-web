console.log('1');
// Connect to server
var io = require('socket.io-client');
var socket = io.connect('http://localhost:7777', {reconnect: true});

console.log('2');

// Add a connect listener
socket.on('connect', function(sockets) {
  socket.emit('cry', "Wahhhh");
});

console.log('3');
