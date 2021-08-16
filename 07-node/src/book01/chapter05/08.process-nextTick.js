console.time('startB');
console.log('start - setTimeout');

setTimeout(() => {
  console.log('nextTick callback 2');
}, 0);

console.log('scheduled - setTimeout');

console.timeEnd('startB');


console.time('startA');
console.log('start - nextTick');

process.nextTick(() => {
  console.log('nextTick callback 1');
});

console.log('scheduled - nextTick');

console.timeEnd('startA');