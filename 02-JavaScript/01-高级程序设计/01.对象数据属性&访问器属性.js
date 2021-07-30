/**
 * 数据属性
 * 1. configurable --- false不可重配置，不可删除
 * 2. enumerable --- 是否可遍历
 * 3. value
 * 4. writable --- 是否可写
 * 
 * 访问器属性
 * 1. configurable
 * 2. enumerable
 * 3. get()
 * 4. set()
 */

// ==== 1. 数据属性 configurable ====
const obj = {};
Object.defineProperty(obj, "key", {
  value: "hello",
  configurable: false,
});
// ---- configurable=false 不可删除
console.log("---configurable---", obj.key);
delete obj.key;
console.log("---configurable---", obj.key);
// ---- configurable=false 不可重配置
try {
  Object.defineProperty(obj, "key", {
    value: "hello",
    writable: true,
    configurable: true,
  });
} catch (err) {
  console.log("---configurable---", err.message);
}
// ---- configurable=false 可更改 writable
Object.defineProperty(obj, 'a', {
  value: 1,
  configurable: false,
  writable: true
})
console.log("---configurable---", obj.a);
obj.a += 1
console.log("---configurable---", obj.a);
Object.defineProperty(obj, 'a', {
  value: 3,
  configurable: false,
  writable: false
})
console.log("---configurable---", obj.a);
obj.a += 1
try {
  Object.defineProperty(obj, 'a', {
    value: 3,
    configurable: false,
    writable: true
  })
  console.log("---configurable---", obj.a);
} catch (err) {
  console.log("---configurable---", err.message);
}
// ==== 1. 数据属性 configurable ====

// ==== 2. 数据属性 enumerable ====
const obj2 = { a: 1 };
Object.defineProperty(obj2, "b", {
  value: 2,
  configurable: true,
  enumerable: false,
});
console.log("---configurable---", Object.keys(obj2));
console.log("---configurable---", Object.getOwnPropertyNames(obj2))

Object.defineProperty(obj2, "b", {
  value: 2,
  configurable: true,
  enumerable: true,
});
console.log("---configurable---", Object.keys(obj2));
// ==== 2. 数据属性 enumerable ====

// ==== 3. 数据属性 writable ====
const obj3 = { a: 1 };
Object.defineProperty(obj3, 'b', {
	value: 2,
	configurable: true,
	enumerable: true,
	writable: false
})
obj3.a += 1;
obj3.b += 1;
console.log('---writable---', obj3)
// ==== 3. 数据属性 writable ====

// ==== 4. 数据属性 默认值 ====
const defaultDefinePropertyObj = Object.defineProperty({}, 'key', { value: 'value' })
console.log('---默认值 defaultDefinePropertyObj---', Object.getOwnPropertyDescriptor(defaultDefinePropertyObj, 'key'))
// { value: 'value', writable: false, enumerable: false, configurable: false }

const defaultObj = { key: 'value' }
console.log('---默认值 defaultObj---', Object.getOwnPropertyDescriptor(defaultObj, 'key'))
// { value: 'value', writable: true, enumerable: true, configurable: true }
// ==== 4. 数据属性 默认值 ====

// ==== 5. 访问器属性 get set ====
const obj4 = {};
let value = 'value'
Object.defineProperty(obj4, 'key', {
	get() {
		console.log('-----获取属性----')
		return value
	},
	set(val) {
		console.log('-----设置属性----')
		value = val
	}
})
console.log('---访问器属性---', obj4.key)
obj4.key = 'new value'
console.log('---访问器属性---', obj4.key)
// ==== 5. 访问器属性 get set ====
