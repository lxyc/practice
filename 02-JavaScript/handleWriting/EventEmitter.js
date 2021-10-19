class EventEmitter {
  map = new Map();

  getHandlers(topic) {
    return this.map.get(topic) || [];
  }

  on(topic, handler) {
    const handlers = this.getHandlers(topic);
    handlers.push(handler);
    this.map.set(topic, handlers);
  }

  emit(topic, ...args) {
    const handlers = this.getHandlers(topic);
    handlers.forEach((handler) => handler.apply(null, args));
  }

  off(topic, handler) {
    if (!handler) {
      this.map.delete(topic);
      return;
    }

    const handlers = this.getHandlers(topic);
    const targetIndex = handlers.findIndex((e) => handler === e);
    if (targetIndex < 0) return;

    handlers.splice(targetIndex, 1);
    if (handlers.length === 0) {
      this.map.delete(topic);
      return;
    }
  }
}

module.exports = EventEmitter;