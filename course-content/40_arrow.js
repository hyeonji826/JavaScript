// 일반 함수
function add1(a, b) {
  return a + b;
}

// 화살표 함수
const add2 = (a, b) => a + b;

// 매개변수가 1개일 때 괄호 생략가능
const square = (x) => x * x;

// 코드 블록이 있을 경우 return을 명시해야함
const add3 = (a, b) => {
  return a + b;
};

/*
const obj = {
  name: "김사과",
  sayHello: function () {
    // method
    setTimeout(function () {
      console.log(`안녕 나는 ${this.name}`); // 1초 이후에 실행되는 결과값
    }, 1000); // 1000 = 1s
  },
};

obj.sayHello();
*/

const obj = {
  name: "김사과",
  sayHello: function () {
    // method
    setTimeout(() => {      // => 이것은 자기자신의 가장 외곽을 가리킴
      console.log(`안녕 나는 ${this.name}`); // 콜백함수가 1초뒤에 반환된다.
    }, 1000); // 1000 = 1s
  },
};
obj.sayHello();
