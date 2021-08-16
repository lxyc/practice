console.log('NodeJS Process Module - stdout method');

process.stdout.write('NodeJS Process Module - stdout method');

console.info('\n');

console.info('console.log()方法封装了process.stdout.write()方法');

console.log = function(log) {
  process.stdout.write('process.stdout.write: ' + log + '\n');
}
console.log('NodeJS Process Module - stdout method');