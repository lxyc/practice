class Emitter {
  map = new Map();

  getTopicHandlers(topic) {
    return this.map.get(topic) || [];
  }

  on(topic, handler) {
    let topicHanlders = this.getTopicHandlers(topic);
    topicHanlders.push(handler);
    this.map.set(topic, topicHanlders);
  }

  emit(topic, ...args) {
    const topicHanlders = this.getTopicHandlers(topic);
    topicHanlders.forEach((handler) => handler(...args));
  }

  off(topic, handler) {
    if (!handler) {
      return this.map.delete(topic);
    }

    const topicHanlders = this.getTopicHandlers(topic);
    const targetIndex = topicHanlders.findIndex((e) => e === handler);
    topicHanlders.splice(targetIndex, 1);
    if (topicHanlders.length === 0) {
      this.map.delete(topic);
    }
  }
}
