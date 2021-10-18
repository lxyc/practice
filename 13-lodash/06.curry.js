function curry(func) {
  const _curry = (...args) => {
    return func.length <= args.length
      ? func.apply(this, args)
      : (..._args) => _curry(...args, ..._args);
  };
  return _curry;
}
