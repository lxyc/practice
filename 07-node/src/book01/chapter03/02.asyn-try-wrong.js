console.info('------NodeJs 异步编程：异常捕获------');

try {
  setTimeout(() => {
    var data = a / 0;
  }, 2000);
} catch (e) {
  console.log(e);
}