function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let complete = true;
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        complete = false;
      }
    }
    if (complete) {
      break;
    }
  }
	return arr;
}

console.log(bubbleSort([1, 3, 4, 6, 7, 5, 8, 9, 2]));
