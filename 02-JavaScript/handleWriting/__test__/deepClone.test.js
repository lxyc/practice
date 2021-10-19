const deepClone = require("../deepClone.js");

test("deepClone: number", () => {
  const a = 1;
  expect(deepClone(a) === a).toBe(true);
});

test("deepClone: string", () => {
  const a = "string";
  expect(deepClone(a) === a).toBe(true);
});

test("deepClone: array", () => {
  const a = [1, 2, 3];
  expect(deepClone(a)).toEqual(a);
  expect(deepClone(a) === a).toBe(false);

  const b = [1, 2, 3, [4]];
  expect(deepClone(b)).toEqual(b);
  expect(deepClone(b) === b).toBe(false);

  const c = [1, 2, 3, [4, [5]]];
  expect(deepClone(c)).toEqual(c);
  expect(deepClone(c) === c).toBe(false);

  const d = [1, 2, 3, [4, [5]], { a: 2, c: { b: 2 } }];
  expect(deepClone(d)).toEqual(d);
  expect(deepClone(d) === d).toBe(false);
});

test("deepClone: object", () => {
  const a = { a: 1 };
  expect(deepClone(a)).toEqual(a);
  expect(deepClone(a) === a).toBe(false);

  const b = { a: 1, c: { b: 2 } };
  expect(deepClone(b)).toEqual(b);
  expect(deepClone(b) === b).toBe(false);

  const c = { a: [1, 2, 3, [4, [5]]], c: 2 };
  expect(deepClone(c)).toEqual(c);
  expect(deepClone(c) === c).toBe(false);

  const d = { s: [1, 2, 3, [4, [5]], { a: 2, c: { b: 2 } }] };
  expect(deepClone(d)).toEqual(d);
  expect(deepClone(d) === d).toBe(false);
});
