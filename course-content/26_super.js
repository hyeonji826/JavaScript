class Animal {
  constructor(name) {
    this.name = name;
  }
}

const animal = new Animal("코끼리");
console.log(animal.name);

class Dog extends Animal {
  constructor(name, color) {
    super(name); // Animal의 생성자를 호출
    this.color = color;
  }
  showInfo() {
    console.log(`${this.name}는 ${this.color} 강아지입니다.`);
  }
}

const dog = new Dog("루시", "흰색");  // --> 생성자 부르는 방법
dog.showInfo();   // --> 메서드를 부르는 방법
