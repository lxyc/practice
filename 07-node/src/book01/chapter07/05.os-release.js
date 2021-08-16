const os = require('os');

const type = os.type();
const release = os.release();

console.log(`操作系统类型：${type}`);
console.log(`操作系统发行版本：${release}`);