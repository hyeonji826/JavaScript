/*
console.log("물 끓이기 시작!");
setTimeout(function () {
  console.log("면 넣기!");
}, 3000);
console.log("계란 준비하기!");
*/

/* 콜백함수의 형태
function greet(name, callback) {
  console.log(`안녕 ${name}!`);
  callback();
}

function sayBye (){
    console.log('잘가~')
}

greet('김사과',sayBye)  // sayBye : 함수의 포인터 */

// map() : 배열의 각 요소에 대해 주어진 콜백함수를 호출하고 새로운 배열 생성
/*
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); */

/*
function doSomething(callback) {
  console.log("작업 시작!");
  callback();
}

doSomething(()=>{
    console.log('작업완료')
}) */

const calc_add = (a, b) => a + b;
const calc_multiply = (a, b) => a * b;

function calculater(num1, num2, action) {
  if (num1 < 0 || num2 < 0) return;

  const result = action(num1, num2);
  return result;
}

console.log(calculater(10, 3, calc_add));
console.log(calculater(10, 3, calc_multiply));

/*
    회문
    회문을 재귀함수를 통해 체크하는 프로그램을 만들어보자.

    isPalindrome(str) 
*/

function isPalindrome(str, callback) {
  let isPalin = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalin = false;
      break;
    }
  }
  callback(isPalin);
}

function Result(result) {
  if (result) {
    console.log("회문입니다.");
  } else {
    console.log("회문이 아닙니다.");
  }
}

isPalindrome("racecar", Result);
