Promise.resolve()
  .then(() => { // m-1-1: promise1
    console.log('promise1');
    return new Promise((resolve, reject) => {
        setTimeout(() => { // M-1
          console.log('timer2')
          resolve()
        }, 0)
    })
      .then(async () => { // m-2-1
        await foo();
        return new Error('error1')
      })
      .then((ret) => {
        setTimeout(() => {
          console.log(ret);
          Promise.resolve()
          .then(() => {
            return new Error('error!!!')
          })
          .then(res => {
            console.log("then: ", res)
          })
          .catch(err => {
            console.log("catch: ", err)
          })
        }, 1 * 3000)
      }, err => {
        console.log(err);
      })
      .finally((res) => {
        console.log(res);
        throw new Error('error2')
      })
      .then((res) => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  })
  .then(() => { // m-2-1
    console.log('promise2');
  })

function foo() {
  setTimeout(() => { // M-3
    console.log('async1');
  }, 2 * 1000);
}

setTimeout(() => { // M-
  console.log('timer1')
  Promise.resolve()
    .then(() => {
      console.log('promise3')
    })
}, 0)

console.log('start'); // M-0

// marco-0: start
// 