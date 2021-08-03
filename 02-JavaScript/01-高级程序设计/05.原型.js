function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p = new Person("bob", 18);

// 实例对象的原型链
console.log(p.__proto__ === Person.prototype);
console.log(p.__proto__.__proto__ === Object.prototype);
console.log(p instanceof Person);
console.log(Person.prototype instanceof Object);

// 构造函数的原型链
console.log(Person instanceof Function);
console.log(Person instanceof Object);

// Function 的原型链
console.log(Function instanceof Function);
console.log(Function instanceof Object);

Person.prototype = {
	sayName() {
		console.log(this.name)
	}
}

const p2 = new Person('tom', 20)
console.log(p2.__proto__, p2.__proto__.__proto__ === Object.prototype)

for(k in p2) {
	console.log('---', k)
}