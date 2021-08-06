function* helloGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

const it1 = helloGenerator();
for (let i of it1) {
  console.log(i);
}

function *f() {
  console.log("执行了");
}
const it2 = f();
setTimeout(() => {
  it2.next();
}, 5000);

var arr3 = [1, [2, 3, [4, 5], [6, 7]]];
const flat = function* (a) {
	for(var i = 0; i < a.length; i += 1) {
		const curr = a[i];
		if (typeof curr !== 'number') {
			yield *flat(curr)
		} else {
			yield curr
		}
	}
}

for (let f of flat(arr3)) {
  console.log(f);
}