function throttle(func, delay) {
	let lastTime = 0;
	return (...args) => {
		const now = Date.now();
		if (now - lastTime >= delay) {
			func.apply(this, args);
			lastTime = now;
		}
	}
}