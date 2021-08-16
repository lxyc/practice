console.info('------ NodeJS 异步编程 Async whilst -----');

const async = require('async');
let count = 0;

const list = [
  { name: 'Jack', age: 20 },
  { name: 'Lucy', age: 18 },
  { name: 'Jack', age: 20 },
  { name: 'Lucy', age: 18 },
  { name: 'Lucy', age: 18 },
];

async.whilst(
  function(cb) {
    cb(null, count < 5);
  },
  function(callback) {
    console.log(count);
    list[count].age += 1;
    count++;
    setTimeout(callback, 1000);
  },
  function(err) {
    console.log('----', count);
    console.log(list);
  }
);

console.info('----- NodeJS 异步编程 -----');