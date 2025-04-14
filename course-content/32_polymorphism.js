class Animal {
  speak() {
    console.log("동물이 소리를 냅니다");
  }
}

class Cat extends Animal {
  speak() {
    console.log("야옹");
  }
}

class Dog extends Animal {
  speak() {
    console.log("멍멍");
  }
}

const animals = [new Cat(), new Dog()];
for (let a of animals) {
  a.speak(); // 다형성 : 같은 이름의 메서드가 상황에 따라 작동하는 것
}
