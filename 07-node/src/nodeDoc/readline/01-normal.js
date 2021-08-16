const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('please input some: ', some => {
  console.log(`some: ${some}`)
  rl.close()
})