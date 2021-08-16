const fs = require('fs');
const exec = require('child_process').exec;

exec('cat txt/ftruncateSync.txt', (err, stdout, stderr) => {
  console.log(`cat txt/ftruncate.txt stdout: ${stdout}`);
  console.log(`cat txt/ftruncate.txt stderr: ${stderr}`);

  const fd = fs.openSync('txt/ftruncateSync.txt', 'a');
  fs.ftruncateSync(fd, 10);
  fs.closeSync(fd);

  exec('cat txt/ftruncateSync.txt', (err, stdout, stderr) => {
    console.log(`cat txt/ftruncate.txt stdout: ${stdout}`);
    console.log(`cat txt/ftruncate.txt stderr: ${stderr}`);
  })
})

