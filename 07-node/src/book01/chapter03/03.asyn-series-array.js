console.info('------ NodeJs 异步编程：Async series ------');

const async = require('async');

async.series([
  function(callback) {
    callback(null, 'hello');
  },
  function(callback) {
    callback(null, 'async');
  },
  function(callback) {
    callback(null, 'series');
  }
], function(err, results) {
  console.log(results);
});
// [ 'hello', 'async', 'series' ]

async.series({
  one: function(callback) {
    callback(null, 'hello');
  },
  two: function(callback) {
    callback(null, 'async');
  },
  three: function(callback) {
    callback(null, 'series');
  }
}, function(err, results) {
  console.log(results);
});
// { one: 'hello', two: 'async', three: 'series' }