import http from 'http';
import express from 'express';

const app = express();

function normalisePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

const port = normalisePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
let availablePort = port;

function startServer(serverPort) {
  server.listen(serverPort);
}

function onListening() {
  const addr = server.address();
  const bind = `${
    typeof addr === 'string' ? 'pipe' : 'port'
  } ${
    typeof addr === 'string' ? addr : addr.port
  }`;
  console.log(`Server is listening on ${bind}`);
  console.log(`Visit: http://localhost:${addr.port}`);
}

server.on('listening', onListening);

startServer(availablePort);
