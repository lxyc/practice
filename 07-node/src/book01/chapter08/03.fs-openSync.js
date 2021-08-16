const fs = require('fs');
const exec = require('child_process').exec;

const child_pre = exec('cat txt/openSync.txt', (error, stdout, stderr) => {
  console.log(`cat txt/openSync.txt stdout: ${stdout}`);
  console.log(`cat txt/openSync.txt stderr: ${stderr}`);
})

const fd = fs.openSync('txt/openSync.txt', 'a');
console.log(`文件描述符: ${fd}`);
console.log('fs.openSync() Done');

fs.closeSync(fd);
console.log(`文件描述符: ${fd}`);
console.log('fs.closeSync() Done');