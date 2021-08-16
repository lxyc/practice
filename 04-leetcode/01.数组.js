// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

function getSingleItem(array) {
  const obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (obj[i]) {
      obj[i] = obj[i] - 1;
      continue;
    }
		obj[i] = (obj[i] || 0) + 1;
  }
	
}
