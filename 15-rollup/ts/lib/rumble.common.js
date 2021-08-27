'use strict';
console.log('----common-----')

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.Person = Person;
