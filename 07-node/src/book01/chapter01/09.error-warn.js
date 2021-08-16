const fs = require('fs');

const file = './error-warn.txt';
const encoding = 'utf-8';

fs.readFile(file, encoding, (err, data) => {
  if (err) {
    console.error('error - \n %s', err);
    console.warn('warn - \n %s', err);
  } else {
    console.log(data);
  }
})