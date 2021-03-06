function SuperType() {
  this.super = 1;
}
SuperType.prototype.sayHi = () => {
  console.log("---super", this.super);
};

function SubType() {
  SuperType.call(this);
  this.sub = 2;
}

SubType.prototype = Object.create(SuperType.prototype);

// Object.create() 模拟实现
function _create(obj) {
  function Fn() {}
  Fn.prototype = obj;
  return Fn;
}
