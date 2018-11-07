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
    // We are going to use custom validator here.
    // what if we need atleast one tag should be there for every course, we are going to vaidate this in custom.
    //tags: [String],
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(value, callback){
                // we will son async here and when result ready, we are gonna call callback.
                setTimeout(() => {
                    const result = value && value.length>0;
                    callback(result);
                }, 4000);
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
        category: '-', // This is a invalid property.
        author: 'Bhanu Kandregula',
        tags: ['web', 'cloud'],
        isPublished: true,
        price: 20
    });

    try{
        await course.validate();
        //const result = await course.save();
        debug('Result: ', result);
    }catch(exception){
        for(field in exception.errors){
            debug(exception.error[field].message);
        }
        
    }
    
}

createCourse();
