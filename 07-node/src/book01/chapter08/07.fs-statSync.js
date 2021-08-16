const fs = require('fs');

// const statSync = fs.statSync('txt/statSync.txt');
// console.log(`txt/statSync.txt file info:`);
// console.log(statSync);

const fd = fs.openSync('txt/statSync.txt', 'a');
const fstatSync = fs.fstatSync(fd);
fs.closeSync(fd);

console.log(fstatSync);