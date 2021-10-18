function curry(func) {
  return function _curry(...args) {
    return func.length <= args.length
      ? func.apply(this, args)
      : (..._args) => _curry(...args, ..._args);
  };
}
