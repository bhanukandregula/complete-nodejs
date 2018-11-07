// This is very useful when writing a unit test.

const debug = require('debug')('app:startup');

Promise.resolve({ id: 1}).then(result => {
    debug('Result', result);
});

Promise.reject(new Error('Reason for rejection.')).then(result => {
    debug('Result', result);
}).catch( error => {
    debug('Error: ', error.message);
});