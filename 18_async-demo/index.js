const debug = require('debug')('app:startup')

debug('************ Sync**********');
debug('Before.');
debug('After');


debug('************ Async**********');

debug('Before')
setTimeout(() => {
    debug('reading a user from DB');
}, 2000);
debug('After');


// Async doesn;t mean multi threasded or concurrent.
