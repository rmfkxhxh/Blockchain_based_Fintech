const events = require("events");
const eventEmitter = new events.EventEmitter(); //모듈속 class이기 때문에

var listener1 = function listener() {
    console.log("listener1 executed~~");
};

var listener2 = function listener() {
    console.log("listener2 executed~~");
};
var listener3 = function listener() {
    console.log("listener3 executed~~");
};
//bind the connection event with listener1
eventEmitter.addListener('connection', listener2);
eventEmitter.addListener('connection', listener1);


eventEmitter.on('connection', listener3);

var eventListener = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + "Listener(s) listening to connection event~~");
eventEmitter.emit('connection');
var a = listener3
eventEmitter.removeListener('connection', a)
console.log(`${a} will be removed`)
eventEmitter.emit('connection')
var eventListener = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event~~");
console.log('finished program')