class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`my name: ${this.name}, age: ${this.age}`);
  }
}

export default Person;
