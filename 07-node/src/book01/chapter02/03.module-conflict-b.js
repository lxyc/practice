console.log('b starting');
exports.done = false;

const a = require('./03.module-conflict-a.js.js');

console.log('in b, a.done = %j', a.done);

exports.done = true;
console.log('b done');