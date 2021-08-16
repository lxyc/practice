const fs = require('fs');
const file = 'err.txt';
const encoding = 'utf-8';

fs.readFile(file, encoding, (err, data) => {
  if (err) {
    setTimeout(() => {
      process.stderr.write(`err: ${err} \n`);
    }, 1000)
  } else {
    console.log(data);
  }
});