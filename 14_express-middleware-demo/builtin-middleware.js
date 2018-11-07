const express = require('express');
const app = express();

// for request validations.
const Joi = require('joi');

// parse the JSON object in the body of the request.
app.use(express.json());

// This is for the builtin middleware which parces incoming request with URLencoded payloads.
// key=value
app.use(express.urlencoded({ extended: true}));

// this middleware - To server static files, which are in /public directory.
app.use(express.static('public'));

// declare an array of courses
const courses = [
    { id: 1, name: "AI" },
    { id: 2, name: "ML" },
    { id: 3, name: "SE" },
    { id: 4, name: "DS" },
];

// list out the all courses.
app.get('/api/courses', (request, response) => {
    response.send(courses);
})

// this is a POST method to add a course to the array.
app.post('/api/courses', (request, response) => {

    // create a schema for the port request protocols.
    // Joi NPM package is used to vaidate the REQUEST OBJECT.
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(request.body, schema);
    console.log(result);

    if(result.error){
        response.status(400).send(result.error);
        // response.status(400).send(result.error.details[0].message);
        return;
    }

    // we need to read the course object that should be in the body of the request.
    // and we have to add that to the course array.
    const course = {
        id: courses.length + 1,
        name: request.body.name
    };

    // store the new course to the course array.
    courses.push(course);
    response.send(course);
});

// configure the port for the server to run.
const port = process.env. PORT || 3000;
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
});
