// 定义并初始化 Buffer 对象 --- buffer16

const buffer16 = Buffer.from([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]);

console.log(`The variable buffer16's length is ${buffer16.length}`);
console.log(`The variable buffer16 is ${buffer16}`);

for(let i = 0; i < buffer16.length; i+= 1) {
  console.log(`buffer16[${i}] is ${buffer16[i]}`);
  console.log(`buffer16[${i}].toString is ${buffer16[i].toString()}`);
}

console.log(buffer16.toString('utf8'));
console.log(buffer16.toString('hex'));

const bufferUTF8 = Buffer.from('nodejs', 'utf8');

console.log(`The variable bufferUTF8's length is ${bufferUTF8.length}`);
console.log(`The variable bufferUTF8 is ${bufferUTF8}`);

for(let i = 0; i < bufferUTF8.length; i+= 1) {
  console.log(`bufferUTF8[${i}] is ${bufferUTF8[i]}`);
  console.log(`bufferUTF8[${i}].toString is ${bufferUTF8[i].toString()}`);
}

console.log(bufferUTF8.toString('utf8'));
console.log(bufferUTF8.toString('hex'));