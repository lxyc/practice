const { exec } = require('child_process');
const last = exec('last | wc -l');

last.stdout.on('data', data => {
  console.log(`系统登录次数统计: ${data}`);
})

last.on('exit', code => {
  console.log(`exit code: ${code}`);
})