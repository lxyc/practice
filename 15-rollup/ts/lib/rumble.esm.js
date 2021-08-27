console.log('---esm---')
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("my name: " + this.name + ", age: " + this.age);
    };
    return Person;
}());

export { Person };
