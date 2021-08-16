const buf = Buffer.alloc(26);

for (let i = 0; i < 26; i += 1) {
  buf[i] = i + 97;
}

console.info(`buf.toString('ascii'): ${buf.toString('ascii')}`);

console.info(`buf.toString('ascii', 0, 5): ${buf.toString('ascii', 0, 5)}`);

console.info(`buf.toString('utf8', 0, 8): ${buf.toString('utf8', 0, 8)}`);

console.info(`buf.toString('hex', 0, 12): ${buf.toString('hex', 0, 12)}`);

console.info(`buf.toString(undefined, 0, 18): ${buf.toString(undefined, 0, 18)}`);