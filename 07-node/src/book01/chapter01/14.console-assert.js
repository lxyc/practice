const assert = require('assert').strict;

const i = 0;
const j = 1;

console.assert(i === 0, 'OK');
console.assert(i === j, 'throw an exception');

assert.ok(0, '这是假值');