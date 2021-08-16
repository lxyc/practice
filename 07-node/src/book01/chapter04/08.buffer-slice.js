const buf = Buffer.from(Array.from({length:26}, (_, i) => (i + 97)));

const buf_slice_a = buf.slice(0, 5);

console.log(buf_slice_a.toString('ascii', 0, buf_slice_a.length));

for (let j = 0; j < 26; j += 1) {
  buf[j] = 122 - j;
}

const buf_slice_b = buf.slice(0, 5);

console.log(buf_slice_b.toString('ascii', 0, buf_slice_b.length));