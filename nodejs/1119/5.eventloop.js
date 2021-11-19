const events = require("events");
const eventEmitter = new events.EventEmitter();

//create an event handler
var myEventHandler = function () {
    console.log("I hear a sream!");
}

//assign the eventhandler to an event
eventEmitter.on('scream', myEventHandler);

//fire the 'sream' event
eventEmitter.emit('scream')