const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('NodeJS> ');
rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
    case 'name':
      console.log('king');
      break;
    case 'code':
      console.log('Node.js');
      break;
    case 'time':
      console.log('2019');
      break;
    default:
      console.log(`Say what? I might have heard ${line.trim()}`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day');
  process.exit(0);
});