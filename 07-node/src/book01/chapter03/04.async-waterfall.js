console.info('------ NodeJS 异步编程 Async waterfall ------');

const async = require('async');

async.waterfall([
  function (callback) {
    callback(null, 1);
  },
  function (data, callback) {
    console.log('---', data);
    callback('test', 2);
  },
  function (data, callback) {
    console.log('---', data);
    callback(null, 3);
  }
], function(err, results) {
  console.log(results);
});

// 回调函数的第一个参数为非空时，waterfall 会停止执行剩余任务