console.log('main starting');

const a = require('./03.module-conflict-a.js');
const b = require('./03.module-conflict-b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);