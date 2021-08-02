// 普通模式
const person1 = {
  name: "name1",
  age: 19,
};

// 工厂模式
function factory(name, age) {
  const obj = {};
  obj.name = name;
  obj.age = age;
  return obj;
}
console.log(factory('name2', 18))

// 构造函数
function Person(name, age) {
	this.name = name;
	this.age = age;
}
console.log(new Person('name3', 20))

// 模拟 new
function funcNew(Func, ...args) {
	const obj = {};
	obj.__proto__ = Func.prototype;
	const ret = Func.apply(obj, args)
	return (['object', 'function'].includes(typeof ret) && ret !== null) ? ret : obj
}
console.log(funcNew(Person, 'name3', 20))