const fs = require('fs');
const file = './not-found.txt';
const encoding = 'utf-8';

fs.readFile(file, encoding, (err, data) => {})