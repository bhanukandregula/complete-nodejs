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

// another API endpoint to list out all the courses.
app.get('/api/courses', (request, response) => {
    response.send(courses);
});

// delete the course object.
app.delete('/api/courses/:id', (request, response) => {
    // Check for the course to delete.
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(request.params.id));
    if (!course) {
        response.status(404).send("The course with given ID was not found.");
        return;
    }

    // If exist, delete it.
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    // Return the same course.
    response.send(course);
});


// configure the PORT number.
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});