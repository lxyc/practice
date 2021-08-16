console.log(`当前进程ID: ${process.pid}`);

process.on('SIGHUP', () => {
  console.log('Got SIGHUO signal');
});

setTimeout(() => {
  console.log('Exiting...');
  process.exit(0);
  console.log(`已经退出进程ID: ${process.pid}`);
}, 1000)

process.kill(process.pid, 'SIGHUP');
console.log(`正在退出进程ID: ${process.pid}`);
