function debounce(func, delay) {
  let timerID = null;
  return function (...args) {
    timerID && clearTimeout(timerID);
    timerID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
