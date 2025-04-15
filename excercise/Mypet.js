// My pet simulation
class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.age = parseFloat(Math.random() * 5);
    this.energy = 50;
    this.hungry = 50;
  }
  getInfo() {
    return `이름 : ${this.name} / 종류 : ${this.type} / 나이 :${this.age}`;
  }

  eat() {
    this.hunger = Math.max(0, this.hunger - 30);
    this.energy = Math.min(100, this.energy + 10);
  }

  play() {
    this.energy = Math.max(0, this.energy - 20);
    this.hunger = Math.min(100, this.hunger + 20);
    this.age = Math.min(100, this.age + 1);
  }

  sleep() {
    this.energy = Math.min(100, this.energy + 40);
    this.hunger = Math.min(100, this.hunger + 10);
  }
}

class Dog extends Pet {
  speak() {
    console.log(`[개] ${this.name}: 멍멍! `);
  }
}
class Cat extends Pet {
  speak() {
    console.log(`[고양이] ${this.name}: 야옹~ `);
  }
}
class Hamster extends Pet {
  speak() {
    console.log(`[햄스터] ${this.name}: 찍찍..! `);
  }
}
