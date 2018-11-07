// a promises is a object that hols the eventual resulat of an asyncronous operation.

// get the debug module.
const debug = require('debug')('app:startup');

// This constructor function takes argument which is a functin that has two arguments.
const p = new Promise( (resolve, reject) => {
    // Do some Async work.
    setTimeout(() => {
        //resolve(1); 
        reject(new Error('message'));
    }, 2000);
    
    // send error object.
    // reject(new error('message');
});

// to get the result from promises object, we have then() and for error, we use catch().
p.then(result => {
    debug('Result: ', result);
}).catch(error => {
    debug('Error', error.message);
});