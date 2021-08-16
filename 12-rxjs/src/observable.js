const { Observable } = require('rxjs');

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4)
  }, 1000)
})

const subscription = observable.subscribe(res => {
  console.log(res);
})