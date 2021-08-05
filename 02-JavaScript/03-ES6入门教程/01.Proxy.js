// ===== get() ====
console.log("一般对象拦截----get:example1-----");
const person = { name: "张三" };
const proxyPerson = new Proxy(person, {
  get(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      console.log(`${propKey} does not exist.`);
    }
  },
});
console.log("---get---", proxyPerson.name);
proxyPerson.age;

console.log("\n可以被继承----get:example2-----");

const proto = new Proxy(
  {},
  {
    get(target, propKey, receiver) {
      console.log("GET", propKey);
      return target[propKey];
    },
  }
);
const obj1 = Object.create(proto);
obj1.foo;
obj1.__proto__.age;

console.log("\n数组支持索引为负数----get:example3-----");

function createArray(arr) {
  return new Proxy(arr, {
    get(target, index) {
      const tarIndex = index >= 0 ? index : target.length + Number(index);
      return target[tarIndex];
    },
  });
}
const arr = createArray([1, 2, 3, 4, 5]);
console.log(arr[-1]);

console.log("\nreceiver----get:example4-----");

const receiverProxy = new Proxy(
  {},
  {
    get(target, propKey, receiver) {
      return receiver;
    },
  }
);
console.log(receiverProxy.b === receiverProxy);
console.log(receiverProxy.b === receiverProxy.b);

console.log("\n和内置属性复用----get:example5-----");
const propProxyObj = new Proxy(
  Object.defineProperties(
    {},
    {
      a: {
        configurable: true,
        // get: () => 123,
        value: 123,
      },
    }
  ),
  {
    get: () => "abc",
  }
);
console.log(propProxyObj.a);

console.log("\n================\n");

// ==== set() ====
const setProxy = new Proxy(
  {},
  {
    set(target, propKey, value) {
      target[propKey] = 123;
      return true;
    },
  }
);
setProxy.a = "abc";
console.log(setProxy);

// 目标对象&源对象
const target = {
  name: "demo",
  sayName() {
    console.log(`my name is ${this.name}`);
  },
};

const proxy = new Proxy(target, Reflect);
console.log(target);
console.log(proxy);

const enhanceArray = (array) =>
  new Proxy(array, {
    get(target, propKey) {
      const index =
        Number(propKey) < 0 ? array.length + Number(propKey) : propKey;
      return Reflect.get(...arguments);
    },
  });

const withDefault = (object, defaultValue) =>
  new Proxy(object, {
    get(target, propKey) {
      return Reflect.has(target, propKey)
        ? Reflect.get(...arguments)
        : defaultValue;
    },
  });

const withPrivate = (object, prefix = "_") =>
  new Proxy(object, {
    has(_, propKey) {
      const isPrivate = propKey.startsWith(prefix);
      return !isPrivate && Reflect.has(...arguments);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((k) => !k.startsWith(prefix));
    },
    get(_, propKey, receiver) {
      // 此处不可使用目标对象，需要使用proxy；才会触发 has 函数
      return Reflect.has(receiver, propKey)
        ? Reflect.get(...arguments)
        : undefined;
    },
  });
