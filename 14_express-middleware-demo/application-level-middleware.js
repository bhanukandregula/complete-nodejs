var express = require('express');
var app = express();

// This is all for the Application-level middlware implementation.


// This middleware is with endpoint '/user/:id/'
app.use('/user/:id', (request, response, next) => {
    console.log('Request type: ', request.method);
    next();
});

app.get('/user/:id', (request, response, next) => {
    response.send("USER");
    next();
});

// This is for the multiple blocks of app.use in a single block - which has the same endpoint.
app.use('/user/bhanu/24', (request, response, next) => {
    console.log('Request URL: ', request.originalUrl);
    next();
}, (request, response, next) => {
    console.log('Request method: ', request.method);
    next();
});

// This is a similar routes, but last routes never get worked because second route excited the loop by not taking the request to next()
app.use('/bhanu', (request, response, next) => {
    console.log("Bhanu Prakash");
    next();
}, (request, response, next) => {
    response.send("Kandregula");
});

app.use('/bhanu', (request, response, next) => {
    comsole.log("Raghu Babu Kandregula");
});

// This is the demo for the next(route)
app.use('/skip/:id', (request, response, next) => {
    if(request.params.id === '0'){
        next('route');
    }else{
       console.log("This is from 1st middleware.");
        next();
    }  
}, (request, response, next) => {
    console.log("This is from second middleware ***");
    next();
});

app.use('/skip/:id', (request, response, next) => {
    console.log("This is the third middleware with same API endpoint.")
    next();
});

// configure a simple '/' GET API.
app.get('/', (request, response) => {
    response.send('Server is up and running....')
});

// configure port for the server to run.
const port = process.env.PORT || 3434;
app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
});