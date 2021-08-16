const { from, Subject } = require('rxjs');
const { multicast } = require('rxjs/operators');

var source = from([1, 2, 3]);
var subject = new Subject();
var multicasted = source.pipe(multicast(subject));

// 在底层使用了 `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// 在底层使用了 `source.subscribe(subject)`:
multicasted.connect();