(async () => {
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  await sleep(500);
  console.log("done");
})();
