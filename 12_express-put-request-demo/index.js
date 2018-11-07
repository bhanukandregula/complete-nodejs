// load the express module.
const express = require('express');

// this returns an object, call it as app.
const app = express();

// parse the JSON object in the body of the request.
app.use(express.json())

// load the joi module, to validate the post request.
// This returns a class.
const Joi = require('joi');

// declare an array of courses
const courses = [
    { id: 1, name: "AI" },
    { id: 2, name: "ML" },
    { id: 3, name: "SE" },
    { id: 4, name: "DS" },
];

// sample GET request.
app.get('/', (request, response) => {
    response.send("hello world !");
});

// another API endpoint to list out all the courses.
app.get('/api/courses', (request, response) => {
    response.send(courses);
});

// this is to update the current resources, so called courses in an array.
app.put('/api/courses/:id', (request, response) => {

    // Lookup the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if (!course) {
        response.status(404).send("The course with given ID was not found.");
        return;
    }

    // Object destructuring.
    const { error } = validateCourse(request.body);
    // If invalid, return 400 - bad request.
    if (error) {
        response.status(400).send(error);
        // response.status(400).send(result.error.details[0].message);
        return;
    }

    // update the course.
    course.name = request.body.name;
    // Return the updated course.
    response.send(course);

});

function validateCourse(course) {
    // create a schema for the port request protocols.
    // Joi NPM package is used to vaidate the REQUEST OBJECT.
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

// configure the PORT number.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});