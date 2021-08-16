const Rx = require('rxjs');
const { from } = Rx;

const subject = new Rx.Subject();

subject.subscribe({
  next: v => console.log('observerA: ' + v)
})

subject.subscribe({
  next: v => console.log('observerB: ' + v)
})

const observable = from([1, 2, 3]);
observable.subscribe(subject);