const express = require('express');
const app = express();

// If this didn't worked, set the environment variable as ` export DEBUG=HandlingError` 
const debug = require('debug')('HandlingError:node');

app.get('/', (request, response) => {
    response.send("Server is up ad running...");
});

app.get('/greetings', (request, response) => {
    response.send("Have a great day!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    debug(`Server is up and running on ${port}`);
});
