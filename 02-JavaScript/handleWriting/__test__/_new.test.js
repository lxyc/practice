const _new = require("../_new.js");

test("newP.name === _newP.name?", () => {
  function Person(name) {
    this.name = name;
  }

  const newP = new Person("tom");
  const _newP = _new(Person, "tom");

  expect(newP.name).toBe("tom");
  expect(newP).toEqual(_newP);
  expect(newP.__proto__).toEqual(_newP.__proto__);
});

test("newPReturnObj === _newPReturnObj?", () => {
  function PersonReturnObj(name) {
    this.name = name;
    // return { a: 1 };
    return null;
  }

  const newPReturnObj = new PersonReturnObj("tom");
  const _newPReturnObj = _new(PersonReturnObj, "tom");

  // expect(newPReturnObj).toEqual({ a: 1 });
  expect(newPReturnObj).not.toBeNull();
  expect(newPReturnObj).toEqual(_newPReturnObj);
  expect(newPReturnObj.__proto__).toEqual(_newPReturnObj.__proto__);
});
