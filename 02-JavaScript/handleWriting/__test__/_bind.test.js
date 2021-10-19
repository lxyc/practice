const _bind = require("../_bind.js");
Function.prototype._bind = _bind;

function sum(a, b) {
  this.a = a;
  this.b = b;
  return a + b;
}
test("context is null or undefined", () => {
  expect(sum._bind(null, 1, 2)()).toEqual(sum.bind(null, 1, 2)());
  expect(sum._bind(undefined, 1, 2)()).toEqual(sum.bind(undefined, 1, 2)());
});

test("context is number", () => {
  expect(sum._bind(0, 1, 2)()).toEqual(sum.bind(0, 1, 2)());
  expect(sum._bind(1, 1, 2)()).toEqual(sum.bind(1, 1, 2)());
});

test("context is string", () => {
  expect(sum._bind('', 1, 2)()).toEqual(sum.bind('', 1, 2)());
  expect(sum._bind('str', 1, 2)()).toEqual(sum.bind('str', 1, 2)());
});

test("context is object", () => {
  expect(sum._bind(/a/, 1, 2)()).toEqual(sum.bind(/a/, 1, 2)());
  expect(sum._bind(new Date(), 1, 2)()).toEqual(sum.bind(new Date(), 1, 2)());
  expect(sum._bind({}, 1, 2)()).toEqual(sum.bind({}, 1, 2)());
});

test("args is undefined", () => {
  expect(sum._bind()()).toEqual(sum.bind()());
});

test("function be Constructor Fcuntion", () => {
  const BindSum = sum.bind();
  const _BindSum = sum._bind();
  const bindFn = new BindSum(1, 2);
  const _bindFn = new _BindSum(1, 2);
  expect(bindFn).toEqual(_bindFn);
});