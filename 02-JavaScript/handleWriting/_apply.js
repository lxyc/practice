var getGlobal = function () {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

const isNullOrUndefined = (v) => [undefined, null].includes(v);
const isObjectOrFunction = (v) => ["object", "function"].includes(typeof v);
const isArrayLike = (o) =>
  o && typeof o === "object" && typeof o.length === "number" && o.length >= 0;

function _apply(context, args = []) {
  let ctx = isNullOrUndefined(context) ? getGlobal() : context;
  ctx = isObjectOrFunction(ctx) ? ctx : context.constructor;

  if (!isArrayLike(args)) {
    throw new TypeError("CreateListFromArrayLike called on non-object");
  }
  const mArgs = Array.from(args);

  ctx.__fn__ = this;
  const res = ctx.__fn__(...mArgs);
  delete ctx.__fn__;
  return res;
}

// Function.prototype._apply = _apply;

module.exports = _apply;
