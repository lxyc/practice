const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('what is your name?', (answer) => {
  console.log('my name is', answer);
  rl.close();
});

rl.question('how old are you?', (answer) => {
  console.log(`I'm `, answer);
  rl.close();
})