const EventEmitter = require("../EventEmitter.js");

test("EventEmitter is work!", () => {
  const eventEmitter = new EventEmitter();

  const handler1 = () => {
    console.log("---topic1---msg1---");
  };

  eventEmitter.on("topic1", handler1);
  eventEmitter.on("topic1", () => {
    console.log("---topic1---msg2---");
  });
  eventEmitter.on("topic2", () => {
    console.log("---topic2---msg1---");
  });
  eventEmitter.on("topic2", () => {
    console.log("---topic2---msg2---");
  });

  eventEmitter.off("topic1", handler1);
  eventEmitter.emit("topic1");

  // eventEmitter.off("topic2");
  // eventEmitter.emit("topic2");
});
