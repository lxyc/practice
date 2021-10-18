function flatten(arr) {
  const ret = [];
  arr.forEach((item) => {
    const n = Array.isArray(item) ? flatten(item) : [item];
    ret.push(...n);
  });
  return ret;
}

console.log(flatten([1, 2, 3, [4, [[5]]]]));
