const execFile = require('child_process').execFile;

execFile('/bin/ls', ['-lh', '.'], (error, stdout, stderr) => {
  if (error !== null) {
    console.log(`execFile error: ${error}`);
    console.log(`execFile stderr: ${stderr}`);
  } else {
    console.log(`stdout: ${stdout}`);
  }
});