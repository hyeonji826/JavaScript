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

class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  simulateDay(day) {
    console.log(`--- Day ${day} ---`);
    this.pets.forEach((pet) => {
      pet.speak();

      const actions = ["eat", "play", "sleep"];
      const action = actions[Math.floor(Math.random() * 3)];

      pet[action]();
      console.log(`${pet.name}은(는) ${action}()을 했습니다.`);
      console.log(pet.getInfo());
    });
    console.log("----------------------");
  }

  showAllPets() {
    console.log("--- 펫 목록 ---");
    this.pets.forEach((pet) => {
      console.log(pet.getInfo());
    });
  }
}

const names = ["달", "별", "태양", "호수", "바다"];
const types = [Dog, Cat, Hamster];

const manager = new PetManager();

for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
  const name = names[Math.floor(Math.random() * names.length)];
  const Type = types[Math.floor(Math.random() * types.length)];
  const pet = new Type(name, Type.name);
  manager.addPet(pet);
}

manager.showAllPets();

for (let day = 1; day <= 3 + Math.floor(Math.random() * 3); day++) {
  manager.simulateDay(day);
}
