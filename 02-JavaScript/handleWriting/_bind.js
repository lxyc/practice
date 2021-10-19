function _bind(context, ...args) {
  const self = this;
  return function (..._args) {
    if (new.target) {
      return new self(...args, ..._args);
    }
    return self.apply(context, args.concat(_args));
  };
}

// Function.prototype._bind = _bind;

module.exports = _bind;
