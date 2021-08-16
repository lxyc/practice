const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('please input some', () => {})

let num = 5
rl.on('line', input => {
  if (--num === 0) {
    rl.close()
  }
  console.log(`输入次数${num}: ${input}`)
})