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
        enum: ['web', 'mobile', 'nerwork', 'cloud'],
        //lowercase: true
        uppercase: true,
        trim:true
    },
    author: String,
    // We are going to use custom validator here.
    // what if we need atleast one tag should be there for every course, we are going to vaidate this in custom.
    //tags: [String],
    tags: {
        type: Array,
        validate: {
            validator: function(value){
                // here we implement custom validation logic.
                return value && value.length >0
            },
            message: 'A course should have atleast one tag.'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,

    // This validations - this has to be published to get the price of the course.
    // FYI - arrow () => functions doesn't work with this. keyword.
    price: {
        type: Number,
        min: 10,
        max: 200,
        get: value => Math.round(value),
        set: value => Math.round(value),
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
        name: 'Google Cloud Course',
        category: 'web',
        author: 'Bhanu Kandregula',
        tags: ['frontend'],
        isPublished: true,
        price: 15.8
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
