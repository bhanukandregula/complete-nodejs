const express = require('express');
const app = express();

// middleware functions are called in sequence.
app.use(function(request, response, next){
    console.log('Logging...');
    next();
});

app.use(function(request, response, next){
    console.log(' 1 2 3 4 5 6');
    next();
});


// simple get API to check the server.
app.get('/', (request, response) => {
    response.send("Server is up and running...")
});

// configure a port for the server to run.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}...`);
});