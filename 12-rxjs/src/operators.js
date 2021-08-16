const { of, interval } = require('rxjs');
const { map, first } = require('rxjs/operators');

// map(x => x * x)(of(1, 2, 3)).subscribe(v => {
//   console.log(v)
// })

// first()(of(1, 2, 3)).subscribe(v => console.log(v));

// const observable = interval(1000);