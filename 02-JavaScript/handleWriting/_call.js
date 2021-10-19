var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

function _call(context, ...args) {
  const isNullOrUndefined = (v) => [undefined, null].includes(v);
  const isObjectOrFunction = (v) => ["object", "function"].includes(typeof v);
  let ctx = isNullOrUndefined(context) ? getGlobal() : context;
  ctx = isObjectOrFunction(ctx) ? ctx : context.constructor;

  ctx.__fn__ = this;
  const res = ctx.__fn__(...args);
  delete ctx.__fn__;
  return res;
}

// Function.prototype._call = _call;

module.exports = _call;
