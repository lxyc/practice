const fs = require('fs');
const exec = require('child_process').exec;

const child_pre = exec('cat txt/openSync.txt', (error, stdout, stderr) => {
  console.log(`cat txt/openSync.txt stdout: ${stdout}`);
  console.log(`cat txt/openSync.txt stderr: ${stderr}`);
})

fs.open('txt/openSync.txt', 'a', (err, fd) => {
  if (err) throw err;

  console.log(`文件描述符: ${fd}`);
  console.log('fs.open() Done');

  fs.close(fd, () => {
    console.log(`文件描述符: ${fd}`);
    console.log('fs.close() Done');
  });
});