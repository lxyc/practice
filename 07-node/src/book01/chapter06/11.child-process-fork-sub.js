process.on('message', (m) => {
  console.log(`child got message: ${JSON.stringify(m)}`);
})

process.send({ sub: 'main' });