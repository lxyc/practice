console.info('-------汇率换算应用------');

const exRate = require('./06.module-exchangerate-obj.js');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter count: ', (iMoney) => {
  console.info(`${iMoney} US-Dollar exchange to RMB equals ${exRate.dollar2rmb(iMoney)}`);
  console.info(`${iMoney} RMB exchange to US-Dollar equals ${exRate.rmb2dollar(iMoney)}`);
  rl.close();
});