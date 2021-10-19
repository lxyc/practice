const _call = require("../_call.js");
Function.prototype._call = _call;

function sum(a, b) {
  return a + b;
}
test("context is null or undefined", () => {
  expect(sum._call(null, 1, 2)).toBe(sum.call(null, 1, 2));
  expect(sum._call(undefined, 1, 2)).toBe(sum.call(undefined, 1, 2));
});

test("context is number", () => {
  expect(sum._call(0, 1, 2)).toBe(sum.call(0, 1, 2));
  expect(sum._call(1, 1, 2)).toBe(sum.call(1, 1, 2));
});

test("context is string", () => {
  expect(sum._call('', 1, 2)).toBe(sum.call('', 1, 2));
  expect(sum._call('str', 1, 2)).toBe(sum.call('str', 1, 2));
});

test("context is object", () => {
  expect(sum._call(/a/, 1, 2)).toBe(sum.call(/a/, 1, 2));
  expect(sum._call(new Date(), 1, 2)).toBe(sum.call(new Date(), 1, 2));
  expect(sum._call({}, 1, 2)).toBe(sum.call({}, 1, 2));
});

test("args is undefined", () => {
  expect(sum._call()).toBe(sum.call());
});