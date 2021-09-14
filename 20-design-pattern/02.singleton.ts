class Singleton {
  static singleton: Singleton;

  static getInstance() {
    if (!Singleton.singleton) {
      Singleton.singleton = new Singleton();
    }
    return Singleton.singleton;
  }
}

const instance = Singleton.getInstance()