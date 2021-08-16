console.info('------ NodeJS异步编程：Async parallelLimit ------');
console.time('aa');

const async = require('async');

async.parallelLimit([
  function(callback) {
    setTimeout(function() {
      callback(null, 'one');
    }, 1000);
  },
  function(callback) {
    setTimeout(function() {
      callback(null, 'two');
    }, 2000);
  }
], 1, function(err, results) {
  console.log(results);
  console.timeEnd('aa');
});

console.info('------ NodeJS异步编程 ------');

// 3秒后输出 ['one', 'two']