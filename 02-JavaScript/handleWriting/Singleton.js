class Singleton {
	static instance;

	static getInstace(...args) {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton(...args);
		}
		return Singleton.instance;
	}
}