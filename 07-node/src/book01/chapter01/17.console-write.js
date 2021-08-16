console.info('Node.js - readline.write() Usage');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.write('delete me! wait for 3s ...');

const duration = 3 * 1000;

const timeout = setTimeout(() => {
  rl.write(null, {ctrl: true, name: 'u'});
  rl.write('哈哈哈');
  rl.write(null, {ctrl: true, name: 'c'});
}, duration);