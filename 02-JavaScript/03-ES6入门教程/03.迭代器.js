function makeIterator(arr) {
  let index = 0;
  return {
    next: () => ({
      done: index === arr.length,
      value: arr[index++],
    }),
  };
}

const it = makeIterator(["a", "b", "c", "d"]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

let iterable = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
};
for (let item of iterable) {
  console.log(item); // 'a', 'b', 'c'
}

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  let index = 0;

  return {
    next: () => ({
			value: this[keys[index]],
			done: index++ === keys.length,
		})
  };
};

const iterObj = new Object({a: 1, b: 2, c: 3})
const itobj = iterObj[Symbol.iterator]()
console.log(itobj.next())
console.log(itobj.next())
console.log(itobj.next())
console.log(itobj.next())

for(const k of iterObj) {
	console.log(k)
}