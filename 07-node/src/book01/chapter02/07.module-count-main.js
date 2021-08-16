const counter1 = require('./07.module-count-obj.js');
console.log('第一次调用模块');

counter1.setOutputVal(10);
counter1.setIncrement(10);

counter1.printNextCount();
counter1.printNextCount();
counter1.printNextCount();
counter1.printNextCount();
counter1.printNextCount();

const counter2 = require('./07.module-count-obj.js');
console.log('第一次调用模块');

counter2.printNextCount();
counter2.printNextCount();
counter2.printNextCount();
counter2.printNextCount();
counter2.printNextCount();
counter2.printNextCount();
counter2.printNextCount();

console.log('自动清零操作');
counter2.autoSetZero();