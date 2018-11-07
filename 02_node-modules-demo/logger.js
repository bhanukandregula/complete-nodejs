// declare a variable.
var url = 'http://mylogger.io/log';

// create a function to expose as a public, so we shall use from other .js where we required.
function log(message){
    // Send an HTTP request.
    console.log(message);
}

// export this method log as public, so we can access from other .js
// module.exports.log = log;
// we can export a single or an object as well.
module.exports = log;