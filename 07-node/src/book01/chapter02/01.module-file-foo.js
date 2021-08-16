const circle = require('./01.module-file-circle.js');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

console.info();

rl.question('Please input radius:\t', (answer) => {
  console.log('The radius is:\t', answer);

  console.log('The area of a circle of radius %d is %f', answer, circle.area(answer));
  console.log('The circumference of a circle of rasius %d is %f', answer, circle.circumference(answer));

  console.info();

  rl.close();
})