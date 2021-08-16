function getNarcissus(min, max) {
  for (let i = min; i < max; i += 1) {
    let sum = 0;
    const numArr = `${i}`.split('');
    numArr.forEach(e => sum += Math.pow(e, numArr.length));
    if (sum === i) {
      console.info(sum);
    }
  }
}

getNarcissus(1, 99999);