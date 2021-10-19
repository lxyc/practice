const _apply = require("../_apply");
Function.prototype._apply = _apply;

function sum(a, b) {
  return a + b;
}
test("context is null or undefined", () => {
  expect(sum._apply(null, [1, 2])).toBe(sum.apply(null, [1, 2]));
  expect(sum._apply(undefined, [1, 2])).toBe(sum.apply(undefined, [1, 2]));
});

test("context is number", () => {
  expect(sum._apply(0, [1, 2])).toBe(sum.apply(0, [1, 2]));
  expect(sum._apply(1, [1, 2])).toBe(sum.apply(1, [1, 2]));
});

test("context is string", () => {
  expect(sum._apply("", [1, 2])).toBe(sum.apply("", [1, 2]));
  expect(sum._apply("str", [1, 2])).toBe(sum.apply("str", [1, 2]));
});

test("context is object", () => {
  expect(sum._apply(/a/, [1, 2])).toBe(sum.apply(/a/, [1, 2]));
  expect(sum._apply(new Date(), [1, 2])).toBe(sum.apply(new Date(), [1, 2]));
  expect(sum._apply({}, [1, 2])).toBe(sum.apply({}, [1, 2]));
});

test("args is undefined", () => {
  expect(sum._apply()).toBe(sum.apply());
});

test("args is not array", () => {
  expect(sum._apply(null, { length: 1 })).toBe(sum.apply(null, { length: 1 }));
  expect(() => sum.apply(null, 1)).toThrow()
  // .toBe(sum.apply(null, 1));
});
