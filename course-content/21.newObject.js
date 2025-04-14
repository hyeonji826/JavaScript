const person = new Object();
person.name = "반하나";
person.age = 25;
person.greet = function () {
  console.log(`안녕하세요, 저는 ${this.name}입니다.`);
};


person.greet()