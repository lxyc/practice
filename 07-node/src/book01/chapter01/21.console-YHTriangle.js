const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('line is ', num => {
  YHTriangle(num);
  rl.close();
});

function YHTriangle(n) {
  for (let i = 0; i < n; i += 1) {
    const arr = [];
    for (let j = 0; j <= i; j += 1) {
      let empty = ' ';
      if (j === 0) empty = empty.repeat(n - 1 - i);
      arr.push(`${empty}${combine(i, j)}`);
    }
    console.log(arr.join(''));
  }
}

function combine(row, index) {
  if (index === 0) return 1;
  if (row === index) return 1;
  return combine(row - 1, index - 1) + combine(row - 1, index);
}