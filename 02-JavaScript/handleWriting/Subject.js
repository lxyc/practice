class Subject {
  observers = [];

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const targetIdx = this.observers.findIndex((e) => e === observer);
    targetIdx !== -1 && this.observers.splice(targetIdx, 1);
  }

  notifyObserver() {
    this.observers.forEach((e) => e.notify());
  }
}
