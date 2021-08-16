const os = require('os');

const type = os.type();
const tmpdir = os.tmpdir();

console.log(`当前${type}系统临时文件: ${tmpdir}`);