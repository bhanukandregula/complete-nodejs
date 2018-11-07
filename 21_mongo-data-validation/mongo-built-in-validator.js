const mongoose = require('mongoose');
const debug = require('debug')('app:startup');

// This connect metos returns a Promise.
 mongoose.connect('mongodb://localhost/playground')
//mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => {
        debug('Connected to MONGODB.');
    })
    .catch(error => {
        debug('Could not connect to Mongo DB ', error.message);
    });

// This schema defines the shape of course documents in MONGODB database.
// We are going to specify the key-value pairs  
const courseSchema = new mongoose.Schema({
    // This is a validator.
    name: { type: String, required: true, minlength: 5, maxlength: 255, 
        //match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'nerwork', 'cloud']
    },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,

    // This validations - this has to be published to get the price of the course.
    // FYI - arrow () => functions doesn't work with this. keyword.
    price: {
        type: Number,
        min: 10,
        max: 200,
        required: function(){
            return this.isPublished 
        }
    }
});

// We are going to compile the DB Schema into the MODEL.
// Course is a class.
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    const course = new Course({
        //name: 'Google Cloud Course',
        author: 'Bhanu Kandregula',
        tags: ['node', 'backend', 'database'],
        isPublished: true
    });

    try{
        await course.validate();
        //const result = await course.save();
        debug('Result: ', result);
    }catch(exception){
        debug(exception.message);
    }
    
}

createCourse();
