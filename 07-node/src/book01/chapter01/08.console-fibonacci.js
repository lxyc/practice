const fibo_cache = (function(){
  const cache = {1: 1, 2: 1};
  return function fibo(n, cb) {
    if (!(n in cache)) {
      cache[n] = fibo(n - 1, cb) + fibo(n - 2, cb);
      cb && cb(cache[n]);
    }
    return cache[n];
  }
})()

let list = [];
fibo_cache(10, (item) => {
  list.push(item);
});

console.info(list.join(' '));