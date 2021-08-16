console.info('--------NodeJs 异步编程：Async parallel ---------');
console.time('aa');

const async = require('async');

async.parallel([
  function(callback) {
    setTimeout(function() {
      callback(null, 'one');
    }, 2000)
  },
  function(callback) {
    setTimeout(function() {
      callback(null, 'two');
    }, 1000)
  }
], function(err, results) {
  console.log(results);
  console.timeEnd('aa');
});

console.info('--------NodeJs 异步编程 ---------');
// 两秒后输出 ['one', 'two']