// var p = new Promise((resolve, reject) => {
//   resolve(123);
//   reject(456);
// });
// .then(
//   (value) => console.log(value),
//   (err) => console.log(err)
// )

// console.log(1);
// new Promise((resolve, reject) => {
//   console.log(2);
//   reject(3);
// }).catch(console.log);
// console.log(4);

// new Promise((resolve, reject) => {
// 	console.log("我是第一个执行的");
//   resolve(1);
//   reject(2);
//   console.log("我还是会执行，且是同步执行");
// }).then(
//   (value) => console.log("fulfilled", value),
//   (reason) => console.log("rejected", reason)
// );

// new Promise(() => {
//   console.log("我的状态一直是 pending");
// })
//   .then(
//     () => console.log("fulfilled"),
//     () => console.log("rejected")
//   )
//   .catch(() => console.log("catch"))
//   .finally(() => console.log("finally"));

// console.log(1);
// new Promise((resolve) => {
//   setTimeout(() => resolve(), 1000);
// })
//   .then(() => console.log(2))
//   .then(() => console.log(3))
//   .then(() => console.log(4));
// console.log(5);

// setTimeout(() => console.log(6), 1000);

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = p1.then(() => 2);
// console.log(p1 === p2);

// const p1 = new Promise((resolve) => resolve(1));
// const p2 = p1.then(2);
// p2.then(console.log)

Promise.reject(1)
	.then(null, (reason) => {
		console.log(reason);
		return 2;
	})
	
  .catch((reason) => {
    console.log(reason);
    return 3;
  })
  .then((value) => {
    console.log(value);
    throw 4;
  })
  .catch((reason) => {
    console.log(reason);
  });
