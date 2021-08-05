function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return val;
    },
    set(newVal) {
      console.log("---触发视图更新---");
      val = newVal;
    },
  });
}

const p1 = { name: "p1" };
Object.keys(p1).forEach((k) => defineReactive(p1, k, p1[k]));
p1.name = "pp1"; // 触发视图更新
p1.age = 18; // 不会触发视图更新

const arr1 = [1, 2, 3];
Object.keys(arr1).forEach((k) => defineReactive(arr1, k, arr1[k]));
arr1[0] = 4; // 触发视图更新
arr1.push(4); // 不会触发视图更新

// ------

function defineReactive1(obj) {
  return new Proxy(obj, {
    set() {
      console.log("---触发视图更新2---");
      return Reflect.set(...arguments);
    },
  });
}

const p2 = { name: "p2" };
const proxyP2 = defineReactive1(p2);
proxyP2.name = "pp2"; // 触发视图更新
proxyP2.age = 19; // 触发视图更新

const arr2 = [1, 2, 3, 4];
const proxyArr2 = defineReactive1(arr2);
proxyArr2[0] = 5; // 触发视图更新
proxyArr2.push(5); // 触发视图更新
