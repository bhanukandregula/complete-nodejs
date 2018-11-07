// load the filesystem module.
const fs = require('fs');

// This will print all the availabe files in current directory
// this is is a sync way.
const files = fs.readdirSync('./');

// log the files array.
console.log('Sync result is: ', files);

// Let's do that same in Async way.
//Async function always have a callback.
fs.readdir('./', function(error, files){
    if(error){
        console.log('Error is: ', error);
    }else{
        console.log('Async result is: ', files);
    }
});
