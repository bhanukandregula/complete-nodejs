const debug = require('debug')('app:startup');

debug('******** Sync ********');
debug('Before');
debug('After');

debug('******** Async ********');
debug('Before');
const user = getUser(1);
debug(user);
debug('After');

function getUser(id){
    setTimeout(() => {
        debug('Reading user from the database.');
        return { id: id, gitHubUsername: 'Bhanu Kandregula'}
    }, 2000);

    return 1;
}


// To overcome this issuse, we are going to work on 
// CallBacks
// Promises
// Async & await