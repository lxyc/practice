new Promise((resolve, reject) => {
  console.log(1) // M0-1
  resolve()
})
.then(() => { // M0-m1
  console.log(2) // M0-m1-1
  new Promise((resolve, reject) => {
      console.log(3) // M0-m1-2
      setTimeout(() => { // M1
        reject();
      }, 3 * 1000);
      resolve()
  })
    .then(() => { // M0-m2
      console.log(4) // M0-m2-1
      new Promise((resolve, reject) => {
          console.log(5) // M0-m2-2
          resolve();
      })
        .then(() => {
          console.log(7) // M0-m3-1
        })
        .then(() => {
          console.log(9) // M0-m4-1
        })
    })
    .then(() => {
      console.log(8) // M0-m3-2
    })
})
.then(() => { 
  console.log(6) // M0-m2-3
})

// M0: 1
// M0-m1: 2 --> 3
// M0-m2: 4 --> 5 --> 6
// M0-m3: 7 --> 8
// M0-m4: 9
// M1: reject


