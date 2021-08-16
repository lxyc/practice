const buffer = Buffer.from('This is Buffer', 'utf8');
console.log(`The variable buffer's length is ${buffer.length}`);
console.log(`The variable buffer is ${buffer}`);

const buffer16 = Buffer.alloc(16);
console.log(`The variable buffer16's length is ${buffer16.length}`);
console.log(`The variable buffer16 is ${buffer16}`);

buffer16.write(`This is Buffer`, 0, 'utf8');
console.log(`The variable buffer16's length is ${buffer16.length}`);
console.log(`The variable buffer16 is ${buffer16}`);

