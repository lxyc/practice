Promise._all = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    const values = [];
    let succCount = 0;
    for (let i = 0; i < promises.length; i += 1) {
      const promise = Promise.resolve(promises[i]);
      promise
        .then((res) => {
          values[i] = res;
          succCount += 1;

          if (succCount === promises.length) {
            resolve(values);
          }
        })
        .catch((err) => {
          reject(err);
          return;
        });
    }
  });
};

Promise._race = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < promises.length; i += 1) {
      const promise = Promise.resolve(promises[i]);
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return;
        });
    }
  });
};
