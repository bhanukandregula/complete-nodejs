const mongoose = require('mongoose');
const debug = require('debug')('app:startup');

// This connect metos returns a Promise.
// mongoose.connect('mongodb://localhost/playground')
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

async function createCourse() {

    const course = new Course({
        name: 'Google Cloud Course',
        author: 'Bhanu Kandregula',
        tags: ['node', 'backend', 'database'],
        isPublished: true
    });

    const result = await course.save();
    debug('Result: ', result);
}


// Get the list of mongodb collections.
async function getCourses() {

    // Here are the few math comparision signs.
    /*
    eq = equals.
    ne = not equals
    gt = greater than
    lt = less than
    gte = greather than or equals too
    lte = less than or equals too
    in =
    non = not in
    */

    // we did static here, but usually we will send this values as  query params with the API
    // /api/courses?pageNumber=2&pageSize=10
    const pageNumber = 2;
    const pageSize = 10;

    // We can filter the object by mentioning in find() params.
    const courses = await Course
    .find({
        // --- Starts with Bhanu
        // author: /^Bhanu/

        // --- Ends with Kandregula
        // author: /Kandregula$/

        //author: 'Bhanu Kandregula',
        //isPublished: true

        // Contains Bhanu
        // author: /.*Bhanu.*/
    })
    .limit(10)
    //.sort({ name: 1 })
    //.select({ name: 1, tags: 1 });
    //.count(); // this returns the number of courses.
    .skip((pageNumber -1)* pageSize)
    .limit(pageSize)
    debug('Courses', courses);
}

// to update the documents from mongodb.
async function updateCourse(id){
    const result = await Course.update({ _id: id },{
       $set: {
           author: 'Mosh Kandregula',
           isPublished: false
       }
    });
    debug(result);
}


// to update the documents from mongodb.
async function removeCourse(id){
    const result = await Course.deleteOne({ _id: id });
    debug(result);
}

//createCourse();
getCourses();
// updateCourse('5a68fdc3615eda645bc6bdec');
// removeCourse();