// 객체를 만들 때 주로 앞글자는 대문자로 쓴다. <-> 사용자 정의 함수는 소문자
function Person(name, age) {
  this.name = name; // this.name : 속성(property) , name : 매개변수(입력값)
  this.age = age;
  this.greet = function () {
    // method는 다른 객체와 공유할 수 있음.
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  };
}
const p1 = new Person("이메론", 30);
console.log(p1.name);
console.log(p1.age);
p1.greet();

const p2 = new Person("배애리", 27);
p2.greet();
