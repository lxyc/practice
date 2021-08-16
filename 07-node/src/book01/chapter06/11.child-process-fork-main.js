const cp = require('child_process');
const n = cp.fork('11.child-process-fork-sub.js');

n.on('message', (m) => {
  console.log(`parent got message: ${JSON.stringify(m)}`);
})

n.send({ main: 'sub' });