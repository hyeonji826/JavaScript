const person = {
  name: "김사과",
  age: 20, // -> property(속성)
  greet: function () {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`); // this -> 현재 자기 객체를 뜻함
    return `안녕하세요, wjsms ${this.name}입니다.` // return 형이 없어서 undefined
  },
};

console.log(person.name);
console.log(person.age);
console.log(person.greet());
