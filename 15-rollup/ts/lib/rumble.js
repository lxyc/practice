(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rumble = {}));
}(this, (function (exports) { 'use strict';

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

  Object.defineProperty(exports, '__esModule', { value: true });

})));
