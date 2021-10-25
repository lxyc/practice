function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const partitionIndex = partition(arr, left, right);
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
  return arr;
}

function partition(arr, left, right) {
  const pivot = left;
  let index = left + 1;

  for (let i = index; i <= right; i += 1) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index += 1;
    }
  }

  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}

const arr = [1, 3, 4, 6, 7, 5, 8, 9, 2];
console.log(quickSort(arr), arr);