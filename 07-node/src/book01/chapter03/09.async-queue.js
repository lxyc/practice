console.info('----- NodeJS 异步编程：Async queue ------');

const async = require('async');

const q = async.queue((task, callback) => {
  console.log('worker is processing task: ', task.name);
  callback();
}, 2);

q.push({name: 'foo'}, (err) => {
  console.log('finish processing foo');
});
q.push({name: 'bar'}, (err) => {
  console.log('finish processing bar');
});
q.push({name: 'cap'}, (err) => {
  console.log('finish processing cap');
});
q.push({name: 'egg'}, (err) => {
  console.log('finish processing egg');
});
q.push({name: 'app'}, (err) => {
  console.log('finish processing app');
});

q.empty(() => {
  console.log('no more tasks wating');
})

q.drain(() => {
  console.log('all taks have benn prcessed');
})

console.info('----- NodeJS异步编程 ----');