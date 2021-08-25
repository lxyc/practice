function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

sleep(1000).then(() => console.log(1));


const p1 = new Promise(function (resolve, reject) {
  // setTimeout(() => reject(new Error('fail')), 3000)
	console.log(23456)
	return 123
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))