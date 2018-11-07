// This debug will return a function, and call it namespace as - app:startup
const debug = require('debug')('app:startup')

// To debug database related messages.
// const dbDebugger = require('debug')('app:db')

const express = require('express');
const app = express();

const morgan = require('morgan');

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    //console.log('Morgan Enabled...');
    debug('startup Debugger Enabled...'); // similar to console.log()
}

// DB Debugger
// dbDebugger('connected to Database...');

app.get('/', (request, response) => {
    console.log("Here we go !!!");
    response.send("Bhanu");
});

// configure port for the server to run.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server up and running on ${port}`);
})