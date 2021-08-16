const spawn = require('child_process').spawn;

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
})

ls.stderr.on('data', (data) => {
  console.log(`stderrL ${data}`);
})

ls.on('close', (code) => {
  console.log(`子程序退出，退出码: ${code}`);
})