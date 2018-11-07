// Event is that signall for something has happened.
// load the events module, which has a class.
const EventEmitter = require('events');

// Inorder to use this class, let's create a instance object to this class.
const emitter = new EventEmitter();

// let's register a listener() for the event 'messageLogged'
// we can use on() to register a event listener.
emitter.addListener('messageLogged', function(){
    console.log('Listener called.');
});

// We `emit()` method to raise an event.
// We need to addListener() for every event we raised.
emitter.emit('messageLogged');
