class Animal {
  speak() {
    // method
    console.log("동물이 소리를 냅니다.");
  }
}

class Dog extends Animal {
  eat() {
    console.log(`강아지가 먹습니다.`);
  }
  speak(){
    console.log("강아지가 소리를 냅니다.")
  }
} // Dog이 Animal의 클래스를 상속받음 반대로 Animal이 Dog의 클래스를 상속X

const animal = new Animal();
animal.speak();

const dog = new Dog();
dog.speak();  //overriding : 중복될 경우, 자식 클래스가 우선 적용된다.
dog.eat()