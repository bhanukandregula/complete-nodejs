const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    authors: [ authorSchema ]
    /*
    author: {
        type: authorSchema,
        required: true
    }
    */
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId){
    //const course = await Course.findById(courseId);
    const course = await Course.update({ _id: courseId }, {
        // set is to assign, and unset is to remove.
        $set: {
            'author.name' : 'Raghu Kandregula'
        }
    })
    //course.author.name = 'Bhanu Kandregula';
    //course.save();
}

async function addAuthor(courseId, author){
    const course = await Course.findById(courseId);
    course.authors.push(author);
    course.save();
}

async function removeAuthor(courseId, authorId){
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove();
    course.save();
}

removeAuthor('5bc4df8002f26717a59f0d03', '5bc4e0357bc34617a9209efd');

//addAuthor('5bc4df8002f26717a59f0d03', new Author({ name: "Ally "}));

/*
createCourse('Node Course', [
    new Author({ name: 'Bhanu' }),
    new Author({ name: 'Raghu' })
]);
*/

// updateAuthor('5bc4dc58725f5a178fff56fa');
