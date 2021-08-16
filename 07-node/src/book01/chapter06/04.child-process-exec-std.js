const exec = require('child_process').exec;

const child = exec('cat 05.child-process-exec.js', (error, stdout, stderr) => {
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  if (error !== null) {
    console.log(`error: ${error}`);
  }
});