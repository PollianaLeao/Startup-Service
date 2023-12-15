const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Broadcast message to all connected clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

const socket = new WebSocket('ws://l54.204.224.87');

socket.addEventListener('open', function (event) {
  console.log('Connected to WS Server');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
  // Update your frontend based on the received message
});

function sendMessage(message) {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.log('WebSocket is not open.');
    }
  }
  