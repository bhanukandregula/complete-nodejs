const express = require('express');
const app = express();

// HELMET module helps securing our apps with setting various HTTP headers.
// This is a middlware function.
const helmet = require('helmet');

// MORGAN middleware is to log HTTP request.
const morgan = require('morgan');

app.use(helmet());

// Log the environment for this project.
// console.log(process.env.NODE_ENV);
// console.log(app.get('env'));

if(app.get('env') == 'development'){
    // You will see log for every HTTP request.
    app.use(morgan('tiny'));
    console.log('morgan enabled...');
}

// Declare a students array.
const students = [
    {
        id: 01, name: "Bhanu"
    },
    {
        id: 02, name: "Ashley "
    },
    {
        id: 03, name: "Ally"
    }
];

// List out the students with GET request.
app.get('/students', (request, response) => {
    response.send(students);
});

// configre the port for the server to start.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
});