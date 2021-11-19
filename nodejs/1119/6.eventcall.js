const events = require("events");
const eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log("connection success~~");

    eventEmitter.emit("data_received");
};

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", ()=> {
    console.log("data recieved success~~");
});

eventEmitter.emit("connection");

console.log("Program finished~~~");