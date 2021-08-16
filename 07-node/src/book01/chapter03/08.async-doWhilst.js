console.info('------ NodeJS异步编程：Async doWhilst ------');

const async = require('async');
let count = 0;

const list = [
  { name: 'Jack', age: 20 },
  { name: 'Lucy', age: 18 },
  { name: 'Jack', age: 20 },
  { name: 'Lucy', age: 18 },
  { name: 'Lucy', age: 18 },
];

async.doWhilst(
  function(callback) {
    console.log(count);
    list[count].age += 1;
    count++;
    setTimeout(callback, 1000);
  },
  function(cb) {
    cb(null, count < 5);
  },
  function(err) {
    console.log(list);
  }
)

console.info('------ NodeJS异步编程 ------');


// 先执行一次再进行判断