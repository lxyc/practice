// const age = 38;
// const obj = {
// 	age: 18,
// 	getAge: function() {
// 		console.log(this.age);
// 	}
// };

// const a = obj.getAge();
// console.log(a);

// const age = 38;
// const obj = {
// 	age: 18,
// 	getAge: function() {
// 		function foo() {
// 			console.log(this.age);
// 		}
// 		foo();
// 	}
// };

// console.log(obj.getAge());

// const age = 38;
// const obj = {
// 	age: 18,
// 	getAge: function() {
// 		console.log(this.age);
// 	}
// };

// const f = obj.getAge;
// f();

// const length = 10;
// function fn() {
// 	console.log(this.length);
// }
// const obj = {
// 	length: 5,
// 	method: function (fn) {
// 		fn(); //
// 		arguments[0](); //
// 	}
// };

// obj.method(fn, 123);


const obj = { age: 18 };
function getAgeAll(...args) {
	const total = args.reduce((prev, curr) => prev + curr, this.age);
	console.log(total)
}

Function.prototype._call = function(context, ...args) {
  const ctx = [undefined, null].includes(context) ? window : context;
  
  const FUNC = Symbol('func');
  ctx[FUNC] = this;
  const result = ctx[FUNC](...args)
  delete ctx[FUNC];
  return result;
}
Function.prototype._apply = function(context, args = []) {
  const ctx = [undefined, null].includes(context) ? window : context;
  
  const FUNC = Symbol('func');
  ctx[FUNC] = this;
  const result = ctx[FUNC](...args)
  delete ctx[FUNC];
  return result;
}
Function.prototype._bind = function(context, ...args) {
  const ctx = [undefined, null].includes(context) ? window : context;
  
  return (...mArgs) => this.apply(ctx, args.concat(mArgs))
}

const fn = getAgeAll.bind(obj, 12)
console.log(fn(11, 10))