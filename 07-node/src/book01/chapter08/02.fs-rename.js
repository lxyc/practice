const fs = require('fs');
const exec = require('child_process').exec;

fs.rename('txt/helloworld-syn-rename.txt', 'txt/helloworld-syn.txt', (err) => {
  console.time('time-10000X10000');
  for(let i = 0; i < 100000; i += 1) {
    for (let j = 0; j < 10000; j += 1) {}
  }
  console.timeEnd('time-10000X10000');
  if (err) throw err;
})

const child_pre = exec('cat txt/helloworld-syn-rename.txt', (error, stdout, stderr) => {
  console.log(`txt/helloworld-syn-rename.txt stdout: ${stdout}`);
  console.log(`txt/helloworld-syn-rename.txt stderr: ${stderr}`);
})

const child_suf = exec('cat txt/helloworld-syn.txt', (error, stdout, stderr) => {
  console.log(`txt/helloworld-syn.txt stdout: ${stdout}`);
  console.log(`txt/helloworld-syn.txt stderr: ${stderr}`);
})