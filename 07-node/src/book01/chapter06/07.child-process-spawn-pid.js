const { spawn } = require('child_process');

const grep_node = spawn('grep', ['node']);

console.log(`child_process grep node pid: ${grep_node.pid}`);
grep_node.stdin.end();

const grep_top = spawn('grep', ['top']);
console.log(`child_process grep top pid: ${grep_top.pid}`);
grep_top.stdin.end();

const grep_ssh = spawn('grep', ['ssh']);
console.log(`child_process grep ssh pid: ${grep_ssh.pid}`);
grep_ssh.stdin.end();