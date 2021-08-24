console.log('1'); // M0-1

setTimeout(() => { // M1
  console.log('2');  // M1-1
  Promise.resolve().then(() => {
    console.log('3'); // M1-m1-1
  })
  new Promise((resolve) => {
    console.log('4'); // M1-2
    resolve();
  }).then(() => {
    console.log('5')  // M1-m1-2
  })
})

Promise.reject().then(() => {
  console.log('13');
}, () => { // M0-m1-1
  console.log('12');
})

new Promise((resolve) => { // M0-2
  console.log('7'); 
  resolve();
}).then(() => { // M0-m1-2
  console.log('8')
})

setTimeout(() => { // M2
  console.log('9'); // M2-1
  Promise.resolve().then(() => { // M2-m1-1
    console.log('10');
  })
  new Promise((resolve) => { // M2-2
    console.log('11');
    resolve();
  }).then(() => { // M2-m1-2
    console.log('12')
  })
})

// M0: 1 --> 7
// M0-m1: 12 --> 8
// M1: 2 --> 4
// M1-m1: 3 --> 5
// M2: 9 --> 11
// M2-m1: 10 --> 12



