/**
 * 数组拆分
 * @param {*} array 
 * @param {*} size 
 * @returns 
 */
function chunk(array, size) {
  const length = array.length;
  size = Math.max(0, size);
  if (size < 1 || length < 1) return [];

  let index = 0;
  let chunkIndex = 0;
  const result = Array(Math.ceil(length / size));
  while (index < length) {
    result[chunkIndex++] = array.slice(index, (index += size));
  }
  return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2))