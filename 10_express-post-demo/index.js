// load the express module.
const express = require('express');

// this returns an object, call it as app.
const app = express();

// parse the JSON object in the body of the request.
app.use(express.json())

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

// this is a POST method to add a course to the array.
app.post('/api/courses', (request, response) => {

    // validate the request body object.
    if(!request.body.name || request.body.name.length <3){
        // 400 bad request.
        response.status(400).send("Name is required  and should be minimum 3 char");
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

// configure the PORT number.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});