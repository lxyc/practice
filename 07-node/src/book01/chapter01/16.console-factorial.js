const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入阶乘运算起始数值\nn = ', (iNum) => {
  console.info(`${iNum}! = ${factorial(iNum)}`);
  rl.close();
});

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
