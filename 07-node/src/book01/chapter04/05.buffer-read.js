let str_readUInt8 = '';
let str_readInt8 = '';
let str_readUInt16LE = '';
let str_readInt16LE = '';
let str_readUInt16BE = '';
let str_readInt16BE = '';

const buf = Buffer.alloc(4);
buf[0] = 0x6;
buf[1] = 0x8;
buf[2] = 0x23;
buf[3] = 0x57;

// 从 buf 中指定的 offset 读取一个无符号的 8 位整数值
str_readUInt8 += 'buf.readUInt8(i) is: ';
for (let i = 0; i < buf.length; i += 1) {
  str_readUInt8 += buf.readUInt8(i).toString(16) + ' ';
}

console.log(str_readUInt8);
console.info();

// 从 buf 中指定的 offset 读取一个有符号的 8 位整数值
str_readInt8 += 'buf.readInt8(i) is: ';
for (let i = 0; i < buf.length; i += 1) {
  str_readInt8 += buf.readInt8(i).toString(16) + ' ';
}

console.log(str_readInt8);
console.info();

// 用指定的字节序格式（readUInt16BE() 返回大端序， readUInt16LE() 返回小端序）从 buf 中指定的 offset 读取一个无符号的 16 位整数值
str_readUInt16LE += 'buf.readUInt16LE(i) is: ';
for (let i = 0; i < buf.length - 1; i += 1) {
  str_readUInt16LE += buf.readUInt16LE(i).toString(16) + ' ';
}

console.log(str_readUInt16LE);
console.info();

str_readInt16LE += 'buf.readInt16LE(i) is: ';
for (let i = 0; i < buf.length - 1; i += 1) {
  str_readInt16LE += buf.readInt16LE(i).toString(16) + ' ';
}

console.log(str_readInt16LE);
console.info();

str_readUInt16BE += 'buf.readUInt16BE(i) is: ';
for (let i = 0; i < buf.length - 1; i += 1) {
  str_readUInt16BE += buf.readUInt16BE(i).toString(16) + ' ';
}

console.log(str_readUInt16BE);
console.info();

str_readInt16BE += 'buf.readInt16BE(i) is: ';
for (let i = 0; i < buf.length - 1; i += 1) {
  str_readInt16BE += buf.readInt16BE(i).toString(16) + ' ';
}

console.log(str_readInt16BE);
console.info();