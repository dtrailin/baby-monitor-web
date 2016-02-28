console.log('1');
// Connect to server
var io = require('socket.io-client');
var socket = io.connect('http://baby-monitor.azurewebsites.net:80', {reconnect: true});

console.log('2');

// Add a connect listener
socket.on('connect', function(sockets) {
  socket.emit('cry', "Wahhhh");
});

socket.on('cry', function(cry) {
  socket.emit('cry', cry);
  console.log(cry);
});

console.log('3');
