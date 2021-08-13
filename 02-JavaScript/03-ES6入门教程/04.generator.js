function* generatorFn() {
  const ret = yield 1;
  return ret;
}

const g = generatorFn();
console.log(g.next(2));
console.log(g.next(3));

function* gFn1(times) {
  while (times-- > 0) {
    yield times * 2;
  }
}

for (const k of gFn1(10)) {
  // console.log(k)
}

// 斐波那契数列
function* fibnacci(n) {
  let [prev, curr] = [1, 1];

  while (n-- > 0) {
    yield prev;
    [prev, curr] = [curr, curr + prev];
  }
}

for (const v of fibnacci(10)) {
  console.log(v);
}

// 数组扁平化
var arr = [1, [[2, 3], 4], [5, 6]];
function flat(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // yield* flat(item);
      result = [...result, ...flat(item)];
      continue;
    }
    // yield item;
    result.push(item);
  }
  return result;
}
console.log(flat(arr));

let num = 12;
function* gen() {
  yield num;
  yield* [1, 2, 3];
  yield num;
}
const g3 = gen();

console.log(g3.next());
console.log(g3.next());
console.log(g3.next());
console.log(g3.next());
num *= 2;
console.log(g3.next());

console.log('========')

function yieldCallback() {
	console.log(4)
	return 4
}

function* generatorFn() {
  console.log(1);
  yield 2;
  console.log(3);
  yield yieldCallback();
	console.log(5)
	return 6;
}

const iter = generatorFn()
console.log('---')
console.log(iter.next())
console.log('---')
console.log(iter.next())
console.log('---')
console.log(iter.next())
