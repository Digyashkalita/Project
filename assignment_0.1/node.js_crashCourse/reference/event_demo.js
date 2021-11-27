const EventEmitter = require("events");

//Create class
class Myemitter extends EventEmitter {}
// Init object
const myEmitter = new Myemitter();

//event listener
myEmitter.on("event", () => console.log("event fired!"));

//Init event
myEmitter.emit("event");
