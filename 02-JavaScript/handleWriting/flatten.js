function flatten(array, deep = Infinity) {
  const ret = [];
  array.forEach((item) => {
    if (Array.isArray(item) && deep > 0) {
      ret.push(...flatten(item, deep - 1));
    } else {
      ret.push(item);
    }
  });
	return ret;
}

module.exports = flatten;
