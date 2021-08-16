const os = require('os');

const platform = os.platform();

const arch = os.arch();

console.log(`操作系统平台: ${platform}`);
console.log(`操作系统架构: ${arch}`);