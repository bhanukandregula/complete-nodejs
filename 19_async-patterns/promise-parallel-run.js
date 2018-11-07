const debug = require('debug')('app:startup');

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        debug('Async operation 01 - got error');
        resolve(1);
        //reject(new Error('Something went wrong...'));
    },2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        debug('Async operation 02');
        resolve(2);
    },2000);
});

/*
// If any promise for an error, its consider as Promiss.all reject will take care.
Promise.all([p1,p2])
    .then(result => {
        debug('Result:', result);
    }).catch(error => {
        debug('Error: ', error.message);
    });
*/

// We can use Promise.race() to make sure of the first completed function to execute.
Promise.race([p1,p2])
    .then(result => {
        debug('Result:', result);
    }).catch(error => {
        debug('Error: ', error.message);
    });
