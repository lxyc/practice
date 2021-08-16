const { spawn } = require('child_process');

const pTop = spawn('top', ['-l', '1']);
const top = spawn('head', ['-n', 10]);

pTop.stdout.pipe(top.stdin);

top.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
})

top.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
})

top.on('exit', code => {
  console.log(`exit code: ${code}`);
})

top.on('close', code => {
  console.log(`close code: ${code}`);
})