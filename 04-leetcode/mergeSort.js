function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

function merge(left, right) {
  const ret = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      ret.push(right.shift());
    } else {
      ret.push(left.shift());
    }
  }
  while (left.length) {
    ret.push(left.shift());
  }
  while (right.length) {
    ret.push(right.shift());
  }
  return ret;
}

const arr = [1, 3, 4, 6, 7, 5, 8, 9, 2];
console.log(mergeSort2(arr), arr);

function mergeSort2(arr) {
	if (arr.length < 2) return arr;
	const middle = Math.floor(arr.length / 2);
	return merge(mergeSort2(arr.slice(0, middle)), mergeSort2(arr.slice(middle)));
}

function merge(left, right) {
	const ret = [];
	while(left.length && right.length) {
		if (left[0] < right[0]) {
			ret.push(left.shift());
		} else {
			ret.push(right.shift());
		}
	}
	while(left.length) {
		ret.push(left.shift());
	}
	while(right.length) {
		ret.push(right.shift());
	}
	return ret;
}