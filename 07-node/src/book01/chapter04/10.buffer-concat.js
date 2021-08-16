const buf = Buffer.from('this is Buffer concat test!');
const str = 'this is string concat test!';

console.time('buffer concat test!');
const list1 = [];
let len = 100 * 1000 * buf.length;
for (let i = 0; i < 100 * 1000; i += 1) {
  list1.push(buf);
  len += buf.length;
}

const s1 = Buffer.concat(list1, len).toString();
console.timeEnd('buffer concat test!');

console.time('string concat test!');
const list2 = [];
for (let i = 0; i < 100 * 1000; i += 1) {
  list2.push(str);
}
const s2 = list2.join('');
console.timeEnd('string concat test!');