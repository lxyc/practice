const buf = Buffer.alloc(32);

const len = buf.write('\u00bd + \u00bc = \u00be', 0);

console.log(`buf.write() usage: ${buf.toString('utf8', 0, len)}, ${len} bytes`);