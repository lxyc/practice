function insertionSort(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		const current = arr[i];
		let pointer = i;
		while(pointer >= 0 && arr[pointer - 1] > current) {
			arr[pointer] = arr[pointer - 1];
			pointer -= 1;
		}
		arr[pointer] = current;
	}
	return arr;
}

console.log(insertionSort([1, 3, 4, 6, 7, 5, 8, 9, 2]));

function inserionSort2(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		const current = arr[i];
		let pointer = i;
		while(pointer >= 0 && arr[pointer - 1] > current) {
			arr[pointer] = arr[pointer - 1];
			pointer -= 1;
		}
		arr[pointer] = current;
	}
	return arr;
}