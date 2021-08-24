console.log('script start'); // M0-1

setTimeout(() => { // M1
  console.log('北歌');
}, 1 * 2000);

Promise.resolve()
.then(function() { // M0-m1-1
  console.log('promise1');
}).then(function() { // M0-m2-1
  console.log('promise2');
});


async function foo() {
  await bar() // M0-2
  console.log('async1 end') // M0-m1-2
}
foo()

async function errorFunc () {
  try {
    await Promise.reject('error!!!') // M0-3
  } catch(e) { // M0-m1-3
    console.log(e)
  }
  // M0-m1-3
  console.log('async1');
  return Promise.resolve('async1 success')
}
errorFunc().then(res => console.log(res)) // M0-m2-2

function bar() {
  console.log('async2 end')
}

console.log('script end'); // M0-4

// M0: 'script start' --> 'async2 end' --> 'script end'
// M0-m1: 'promise1' --> 'async1 end' --> 'error!!!' --> 'async1'
// M0-m2: 'promise2' --> 'async1 success'
// M1: '北歌'
