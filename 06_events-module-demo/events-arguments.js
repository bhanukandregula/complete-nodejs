// Event is that signall for something has happened.
// load the events module, which has a class.
const EventEmitter = require('events');

// Inorder to use this class, let's create a instance object to this class.
const emitter = new EventEmitter();

// let's register a listener() for the event 'messageLogged'
// we can use on() to register a event listener.
// => is used instead of function word.
emitter.addListener('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});

// We `emit()` method to raise an event.
// We need to addListener() for every event we raised.
// If we like to send bunch of values while emiting event, best practice is to send in a object.
emitter.emit('messageLogged', { id: 1, url: 'http://bhanukandregula.com'});
