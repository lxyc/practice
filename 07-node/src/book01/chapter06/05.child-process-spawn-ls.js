const { spawn } = require('child_process');
const ls_var = spawn('ls', ['-hl', '/usr']);

ls_var.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls_var.on('error', (code) => {
  console.log(`child process error with code ${code}`);
});

ls_var.on('close', (code) => {
  console.log(`child process closed with code ${code}`);
})

ls_var.on('exit', (code) => {
  console.log(`child process exited with code ${code}`);
})