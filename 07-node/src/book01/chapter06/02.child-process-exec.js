const exec = require('child_process').exec;

const child = exec('cat 02.child-process-exec.js', (err, stdout, stderr) => {
  console.log(stdout);
});