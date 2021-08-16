const fork = require('child_process').fork;

const cpus = require('os').cpus();
console.log(`机器内核数：${cpus.length}`);

for (let i = 0; i< cpus.length; i += 1) {
  console.log('Fork a new child_process now..');
  fork('./10.worker.js');
}