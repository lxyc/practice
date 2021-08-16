module.exports = class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age
  }

  userinfo() {
    console.log('%s is %d years old', this.name, this.age);
  }
}

exports.tag = function() {
  console.log('This is a tag function.');
}