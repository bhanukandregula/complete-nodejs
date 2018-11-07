// load the http module.
const http = require('http');

// We can create a web sever with CreateServer() which is a eventEmitter.
const server = http.createServer((request, response) => {
    if(request.url === '/'){
        response.write('Hello World!');
        response.end();
    }

    if(request.url === '/api/courses'){
        response.write(JSON.stringify([1,2,3,4,5]));
        response.end();
    }
});

server.listen(3000);

console.log('listening on port 3000...');