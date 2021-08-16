console.trace();
console.trace('start');

const fs = require('fs');
const file = './not-found.txt';
const encoding = 'utf-8';

fs.readFile(file, encoding, (err, data) => {
  console.trace('fs-start');
  if (err) {

  } else {

  }
  console.trace('fs-end');
})

console.trace('end');