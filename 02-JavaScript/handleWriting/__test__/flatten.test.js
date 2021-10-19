const flatten = require("../flatten.js");

test("flatten is work", () => {
  const arr1 = [1, [2]];
  expect(flatten(arr1)).toEqual([1, 2]);

  const arr2 = [1, [2], [3, [4], [[5]]]];
  expect(flatten(arr2, 1)).toEqual([1, 2, 3, [4], [[5]]]);
  expect(flatten(arr2, 2)).toEqual([1, 2, 3, 4, [5]]);
  expect(flatten(arr2, 3)).toEqual([1, 2, 3, 4, 5]);
  expect(flatten(arr2)).toEqual([1, 2, 3, 4, 5]);
});
