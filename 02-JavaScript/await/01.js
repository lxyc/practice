// async function foo() {
// 	// return 1
// 	throw new Error('err')
// }
// console.log(foo())

// async function foo() {
// 	try {
// 		// const res = await 123
// 		// const res = await { a: 123 }
// 		// const res = await { then: (resolve) => resolve(567) }
// 		const res = await Promise.reject(789)
// 		console.log(res)
// 		return 7890
// 	} catch (err) {
// 		console.log(err)
// 	}
// }

// foo().then((res) => console.log('---', res))

// async function foo() {
//   try {
//   	const res = await Promise.reject(1);
//   	console.log('---', res); // 1
//   } catch(err) {
//   	console.log('===', err);
//   }
// }

// foo()
// Promise.resolve()
//   .then(() => {
//     console.log(11);
//     return Promise.resolve()
//       .then(async () => {
// 				await foo();
//         console.log(1);
//       })
//       .then(() => {
//         console.log(2);
//       })
//       .then(() => {
//         console.log(4);
//       });
//   })
//   .then(() => {
//     console.log(22);
//   });

// function foo() {
//   setTimeout(() => {
//     console.log(3);
//   }, 2 * 1000);
// }

console.log(1);

function foo() {
	console.log(2);
  new Promise((resolve) => {
  	bar();
    resolve();
  }).then(() => {
    console.log(3); // 异步执行
  })
}

function bar() {
	console.log(4);
}

foo();

console.log(5);


