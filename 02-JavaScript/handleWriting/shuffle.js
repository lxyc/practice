function shuffle(arr) {
  arr.forEach((_, index) => {
    const randIndex = Math.floor(Math.random() * (index + 1));
    if (randIndex !== index) {
      [arr[index], arr[randIndex]] = [arr[randIndex], arr[index]];
    }
  });
  return arr;
}
