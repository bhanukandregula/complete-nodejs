// load the http module.
const http = require('http');

// We can create a web sever with CreateServer() which is a eventEmitter.
const server = http.createServer();
server.on('connection', (socket) => {
    console.log('New connection...');
});
server.listen(3000);

console.log('listening on port 3000...');