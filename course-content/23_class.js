class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } // constructor : method
  greet() {
    console.log(`안녕하세요,${this.name}입니다.`);
  }
}

const p1 = new Person("김사과", 20);
p1.greet();
const p2 = new Person("반하나", 25);
p2.greet();
