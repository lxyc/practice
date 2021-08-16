const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('please enter number \n', num => {
  primeNum(num);
  rl.close();
});

function primeNum(max, min=2) {
  for (let i = min; i < max; i += 1) {
    let j = 1, flag = true;
    while(j <= i) {
      if (i % j === 0 && j !== i && j !== 1) {
        flag = false;
        break;
      }
      j += 1;
    }
    if (flag) console.log(i);
  }
}