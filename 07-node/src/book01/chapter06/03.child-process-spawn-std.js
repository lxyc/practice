const cp = require('child_process');
const cat = cp.spawn('cat');

cat.stdout.on('data', (d) => {
  console.log(d.toString());
});

cat.on('exit', () => {
  console.log('cat on exit');
});

cat.on('close', () => {
  console.log('cat on close');
});

cat.stdin.write('cat on data');

cat.stdin.end();