const str = `\u00bd + \u00bc = \u00be`;

console.log(`${str}: ${str.length} characters, ${Buffer.byteLength(str, 'utf8')} bytes`);

// 打印: ½ + ¼ = ¾: 9 个字符, 12 个字节