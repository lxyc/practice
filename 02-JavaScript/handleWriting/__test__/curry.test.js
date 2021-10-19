const curry = require("../curry.js");

test("curry is work", () => {
  function sum(a, b, c, d) {
    return a * b + c * d;
  }
  const currySum = curry(sum);

  expect(currySum(1, 2, 3, 4)).toBe(14);
  expect(currySum(1)(2, 3, 4)).toBe(14);
  expect(currySum(1, 2)(3, 4)).toBe(14);
  expect(currySum(1, 2, 3)(4)).toBe(14);
  expect(currySum(1)(2)(3)(4)).toBe(14);
});
