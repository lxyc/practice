const fs = require('fs');

fs.renameSync('txt/helloworld-syn.txt', 'txt/helloworld-syn-rename.txt');

const exec = require('child_process').exec;

const child_pre = exec('cat txt/helloworld-syn.txt', (error, stdout, stderr) => {
  console.log(`cat helloeorld-syn.txt stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})

const child_suf = exec('cat txt/helloworld-syn-rename.txt', (error, stdout, stderr) => {
  console.log(`cat helloworld-syn-rename.txt stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
})