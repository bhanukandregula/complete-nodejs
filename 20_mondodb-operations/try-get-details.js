const mongoose = require('mongoose');
const debug = require('debug')('app:startup');

// This connect metos returns a Promise.
mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => {
        debug('Connected to MONGODB.');
    })
    .catch(error => {
        debug('Could not connect to Mongo DB ', error.message);
    });

// This schema defines the shape of course documents in MONGODB database.
// We are going to specify the key-value pairs  
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

// We are going to compile the DB Schema into the MODEL.
// Course is a class.
const Course = mongoose.model('Course', courseSchema);

// Get the list of mongodb collections.
async function getCourses() {

    // We can filter the object by mentioning in find() params.
    const courses = await Course
    .find({
        author: 'Mosh',
        tags: 'backend',
        isPublished: true
    })
    .sort({ name: 1 })

    debug('Courses', courses);
}

//createCourse();

async function run(){
    const courses = await getCourses();
    debug(courses);
}

run();
