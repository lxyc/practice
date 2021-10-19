const getSubType = (o) =>
  Object.prototype.toString.call(o).replace(/(object)|\[|\]| /g, "");
const isObject = (o) => o && ["object", "function"].includes(typeof o);

function deepClone(target) {
  if (!isObject(target)) {
    return target;
  }

  // 理论上，这里需要根据不同的类型，重新生成实例
  const ret = Array.isArray(target) ? [] : {};
  for (let key of Object.keys(target)) {
    ret[key] = isObject(target[key]) ? deepClone(target[key]) : target[key];
  }
  return ret;
}

module.exports = deepClone;