function flatten(arr) {
  const ret = [];
  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];
    if (Array.isArray(curr)) {
      ret.push(...flatten(curr));
    } else {
      ret.push(curr);
    }
  }
  return ret;
}
