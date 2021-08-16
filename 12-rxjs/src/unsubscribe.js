const Rx = require('rxjs');

var observable = Rx.Observable.create(observer => {
  let count = 0;
  // 追踪 interval 资源
  var intervalID = setInterval(() => {
    if (count++ >= 5) {
      observer.complete();
    }
    observer.next('hi');
  }, 1000);

  // 提供取消和清理 interval 资源的方法
  return function unsubscribe() {
    console.log('=====')
    clearInterval(intervalID);
  };
});

const subscription = observable.subscribe({
  next: res => {
    console.log(res);
  },
  complete: () => {
    console.log('complete');
  }
});