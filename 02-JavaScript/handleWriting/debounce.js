function debounce(func, delay, immediately) {
  let timerID = null;
  return (...args) => {
    timerID && clearTimeout(timerID);
		if (timerID && immediately) {
			func.apply(this, args);
		}
    timerID = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
