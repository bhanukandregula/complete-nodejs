// load the express module.
const express = require('express');

// this returns an object, call it as app.
const app = express();

// declare an array of courses
const courses = [
    { id: 1, name: "AI" },
    { id: 2, name: "ML" },
    { id: 3, name: "SE" },
    { id: 4, name: "DS" },
];

// this is a simple GET request
app.get('/', (request, response) => {
    response.send("Hello World!");
});

// another API endpoint to list out all the courses.
app.get('/api/courses', (request, response) => {
    response.send(courses);
});

// another API endpoint to get the details if specific course.
app.get('/api/courses/:id', (request, response) => {
    // response.send(request.query); // this is for checking query parameters.
    // response.send(request.params.id);
    const course = courses.find(c => c.id === parseInt(request.params.id));
    // 404
    if(!course){
        response.status(404).send("The course with given ID was not found.");;
    }else{
        response.send(course);
    }
});

// configure the PORT number.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});