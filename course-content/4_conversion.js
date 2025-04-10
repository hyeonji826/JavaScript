console.log(10 + 20);
console.log(10 + "20");
console.log("3" * "5"); //JS가 암시적(자동)타입 변환해서 숫자의 곱으로 나온다.
console.log(1 - "일"); //NaN : Not-a-Number , 숫자가 아님을 의미하는 특별한 값

const num1 = "10";
const num2 = "3.5";
const num3 = 5;
// const를 많이 사용하는 이유? : 프로그램을 짜다보면 변수에 값을 재할당하는 경우가 거의 없기 때문에
// 재할당이 불가능한 const을 사용하여 실수를 줄이는 경향이 있다.
console.log(`현재 num1의 타입 : ${typeof num1}`);
// console.log("현재 num1의 타입 :", typeof (num1));
console.log(`Number(num1)의 타입:${typeof Number(num1)}`);
//Number(num1) = 숫자형으로 변환
console.log(`현재 num3의 타입 :${typeof num3}`);
console.log(`String(num3)의 타입 :${typeof String(num3)}`);
// String(num3) = 문자형으로 변환
console.log(`Boolean(num1)의 타입 ${typeof Boolean(num1)},${Boolean(num1)}`);
// Boolean : 0, '''''' -> False
console.log(`Object(num1)의 타입 ${typeof Object(num1)},${Object(num1)}`);
// Object : 객체형으로 변환
console.log(
  `parseInt(num2)의 타입: ${typeof parseInt(num2)}, ${parseInt(num2)}`
);
// parseInt : 숫자형의 정수
console.log(
  `parseFloat(num2)의 타입: ${typeof parseFloat(num2)}, ${parseFloat(num2)}`
);
// parseFloat : 숫자형의 소수
