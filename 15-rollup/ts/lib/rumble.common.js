'use strict';

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

var A = 'A';

exports.A = A;
exports.Person = Person;
