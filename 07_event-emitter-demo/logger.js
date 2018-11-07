const EventEmitter = require('events');

// when we declare a function inside a class, we don't need a function keyword to declare a function.
class Logger extends EventEmitter {
    log(message){
        // raise an event.
        this.emit('messageLogged', { data: 'This is a message from Bhanu'});
    }
}

module.exports = Logger;