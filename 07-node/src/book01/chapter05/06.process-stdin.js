console.info('用户输入数据');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Print Data ${chunk} \n`);
  }
});

// Ctrl+D组合键 控制结束
process.stdin.on('end', () => {
  process.stdout.write('end.\n');
});