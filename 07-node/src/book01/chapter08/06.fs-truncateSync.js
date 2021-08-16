const fs = require('fs');
const exec = require('child_process').exec;

exec('cat txt/truncateSync.txt', (err, stdout, stderr) => {
  console.log(`cat txt/truncateSync.txt stdout: ${stdout}`);
  console.log(`cat txt/truncateSync.txt stderr: ${stderr}`);
  console.log(`length: ${stdout.length}`);

  fs.truncateSync('txt/truncateSync.txt', 6);

  console.log(`fs.truncateSync() Done`);

  exec('cat txt/truncateSync.txt', (err, stdout, stderr) => {
    console.log(`cat txt/truncateSync.txt stdout: ${stdout}`);
    console.log(`cat txt/truncateSync.txt stderr: ${stderr}`);
    console.log(`length: ${stdout.length}`);
  })
})