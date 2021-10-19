function curry(func, ...args) {
  if (func.length <= args.length) {
    return func.apply(this, args);
  }
  return (..._args) => curry(func, ...args, ..._args);
}

module.exports = curry;