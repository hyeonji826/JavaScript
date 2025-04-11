// function sayHello() {
//   console.log("안녕하세요");
// }
// sayHello();

const sayHello = function () {
  console.log("안녕하세요");
};

sayHello();

// 1. 매개변수 X 함수
function showMessage() {
  console.log("환영합니다!");
}
showMessage();

// 2. 매개변수 O 함수
function greet(name) {
  console.log(`안녕하세요, ${name}님!`);
}

greet("김사과");

function sub(num1, num2) {
  result = num1 - num2;
  console.log(`뺄셈 결과: ${result}`);
}
sub(10, 5);

// 3. return O 함수
function add(a, b) {
  return a + b;
}

console.log(add(10, 3));
let result2 = add(10, 3);
console.log(result2);

// 4. 기본값이 있는 함수
function greet2(name = "게스트") {
  console.log(`안녕하세요, ${name}님!`);
}

greet2();
greet2("홍길동");

// .5
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));

// 6. 즉시 실행 함수
(function () {
  console.log("이건 즉시 실행 함수입니다!");
})();

// 7. 중첩 함수
function outer() {
  function inner() {
    console.log("안쪽 함수 실행!");
  }
  inner();
}

outer();

// 8. 함수에서 함수반환(고차 함수)
function createGreeting(message) {
  return function (name) {
    console.log(`${message},${name}님!`);
  };
}
const hello = createGreeting("안녕하세요");
hello("김사과");
