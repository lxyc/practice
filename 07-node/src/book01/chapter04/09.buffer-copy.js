const buf1 = Buffer.allocUnsafe(26);
const buf2 = Buffer.allocUnsafe(26);

for (let i = 0; i < 26; i += 1) {
  buf1[i] = i + 97; // 97 ASCII 'a'
  buf2[i] = 35; // ASCII '#'
}

buf1.copy(buf2, 6, 0, 10);

console.log(buf2.toString('ascii'));

const buf = Buffer.alloc(26);
for (let i = 0; i < 26; i += 1) {
  buf[i] = i + 97;
}

console.info(buf.toString());

buf.copy(buf, 0, 6, 10);

console.info(buf.toString());