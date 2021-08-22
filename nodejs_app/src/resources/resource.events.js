const EventEmitter = require('events');

class Logger extends EventEmitter {
    log () {
        this.emit('message', {});
    }   
}

module.exports = Logger;


////////////////////////////////////////////////////////

// a simple concept for event emitter

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', () => {
    console.log('Message has been log');
});

// Raise an event
// emit means is making a noise, produce signal
emitter.emit('messageLogged');


