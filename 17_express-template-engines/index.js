const express = require('express');
const app = express();

// this module is for debugging.
const debug = require('debug')('app:startup')

// pug is the template engine name.
// we don;t need to require the pug, express will take care about it automatically.
app.set('view engine', 'pug');

// optional, if we need to override the templates.
app.set('views', './views');

// create a route for index.pug to render.
// Pass the values of title and message values from this endpoint.
// This will render in HTML on the browser.
app.get('/', (request, response) => {
    response.render('index', { title: "My Express App", message: "Hello World!"});
});

// configure the port for server to run.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    debug(`server is up and running on ${port}`);
});

