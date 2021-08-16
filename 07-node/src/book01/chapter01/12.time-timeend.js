let n = 0;

console.time('10000X10000-times'); // mark a time

for(let i = 0; i < 10000; i += 1) {
  for(let j = 0; j < 10000; j += 1) {
    n += 1;
  }
}

console.timeEnd('10000X10000-times'); // finish timer

console.info(n);