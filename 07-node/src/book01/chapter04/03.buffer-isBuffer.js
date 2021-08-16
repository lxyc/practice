console.info('-------Buffer.isBuffer()-------');

const buffer = Buffer.from('nodejs', 'utf8');

if (Buffer.isBuffer(buffer)) {
  console.log(`The 'buffer' is a Buffer obj` );
} else {
  console.log(`The 'buffer' is not a Buffer obj` );
}

const str = 'nodejs';

if (Buffer.isBuffer(str)) {
  console.log(`The 'str' is a Buffer obj` );
} else {
  console.log(`The 'str' is not a Buffer obj` );
}

console.log(Buffer.isEncoding('utf8'), buffer, buffer.length);