const EventEmitter = require('events').EventEmitter;

const obj = new EventEmitter();

setTimeout(() => {
  obj.emit('ready');
}, 1000);

module.exports = obj;