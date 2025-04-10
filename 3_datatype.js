/*
    기본형( Primitive Type)
*/
// 내부적으로 각자 다른 값을 가짐
let num = 20;
let str = "Hello, JS!";
let isReady = true;
let nothing = null;
let notDefined;
let bigNumber = 123456789012334567n;
let unique = Symbol("id");

console.log("기본형 타입 출력");
console.log("num", num);
console.log("str", str);
console.log("isReady", isReady);
console.log("nothing", nothing);
console.log("notDefined", notDefined);
console.log("bigNumber", bigNumber);
console.log("unique", unique);

// 기본형 : 값을 복사해서 같은 값의 공간을 새로 생성함
// 참조형 : stack의 obj2가 Heap의 obj1와 같은 주소를 가리킴
let obj1 = { name: "apple" };
console.log(obj1.name);
let obj2 = obj1;
obj2.name = "banana";
console.log(obj2.name); // banana
console.log(obj1.name); //원래 변수의 값도 바뀐다.

/*
    참조형(Reference Type)
*/
//object - 여러 값을 하나로 묶는 자료형
let person = { name: "apple", age: 20 };
// array - 순서가 있는 값들의 집합
let numbers = [1, 2, 3, 4, 5];
// function - 실행 가능한 코드 블록
let greet = function () {
  return "안녕하세요";
};
// date, regexp, map, set, class etc... -> 내장 함수
let now = new Date();

console.log("참조형 타입 출력");
console.log("person :", person);
console.log("numbers :", numbers);
console.log("greet() :", greet());
console.log("now :", now);

// ```(벡틱)
let num1 = 10;
let num2 = 5;
// 10*5 = 50
console.log(num1, "*", num2, "=", num1 * num2);
console.log(`${num1}*${num2}=${num1 * num2}`);
