const config = require('config');

// configuration
// Change the NODE_ENV to development and production to check out the config values in console.
console.log('Application name: ' + config.get('name'));

console.log('Application host: ' + config.get('mail.host'));

console.log('Application password: ' + config.get('mail.password'));
