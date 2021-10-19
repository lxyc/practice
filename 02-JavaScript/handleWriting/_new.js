/**
 * new Func(...args) === _new(Func, ...args)
 * @param {*} func
 * @param  {...any} args
 * @returns
 */
function _new(func, ...args) {
  const obj = {};
  obj.__proto__ = func.prototype;
  const res = func.apply(obj, args);
  return res && ["object", "function"].includes(typeof res) ? res : obj;
}

module.exports = _new;
