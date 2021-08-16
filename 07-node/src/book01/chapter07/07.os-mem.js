const os = require('os');
const totalmem = os.totalmem();
const freemem = os.freemem();

console.log(`操作系统内存总量为： ${totalmem} byte, ${totalmem / 1024 / 1024} Mb`);
console.log(`操作系统空闲内存为： ${freemem} byte, ${freemem / 1024 / 1024} Mb`);