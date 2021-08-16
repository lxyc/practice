const cp = require('child_process');
const child = cp.fork('12.child-process-fib-sub.js');
child.on('message', (m) => {
  console.log(`数列: ${m.result}`);
})

for (let i = 1; i < 10; i += 1) {
  child.send({input: i});
}