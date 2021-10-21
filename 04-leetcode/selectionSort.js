function selectionSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min === i) continue;
    [arr[min], arr[j]] = [arr[j], arr[min]];
  }
  return arr;
}

console.log(selectionSort([1, 3, 4, 6, 7, 5, 8, 9, 2]));
