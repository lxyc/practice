// 获取 Promise 的状态
const PROMISE_PENDING = "pending";
const PROMISE_RESOLVED = "fulfilled";
const PROMISE_REJECTED = "rejected";

function promiseState(promise) {
  return Promise.race([promise, PROMISE_PENDING]).then(
    (value) => (value === PROMISE_PENDING ? value : PROMISE_RESOLVED),
    () => PROMISE_REJECTED
  );
}

var a = Promise.resolve(1);
var b = Promise.reject(2);
var c = new Promise(() => {});

promiseState(a).then((state) => console.log(state)); // fulfilled
promiseState(b).then((state) => console.log(state)); // rejected
promiseState(c).then((state) => console.log(state)); // pending
