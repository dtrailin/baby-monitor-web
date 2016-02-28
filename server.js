// Load requirements
var io = require('socket.io')();

// Add a connect listener
io.on('connect', function(socket) {
  console.log('Client connected.');

  // Disconnect listener
  socket.on('cry', function(cry) {
    io.emit('cry', cry);
    console.log('Crying because...' + cry);
  });

  socket.on('disconnect', function() {
    console.log('Client disconnected.');
  });
});

io.listen(7777);
