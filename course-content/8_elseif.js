let age = 13;

if (age >= 18) {
  console.log("성인입니다.");
} else if (age >= 13) {
  console.log("청소년입니다.");
} else if (age >= 6) {
  console.log("어린이입니다.");
} else {
  console.log("유아입니다.");
}

// 심화버전
let kor = 100;
let eng = 76;
let math = 95;
let total = kor + eng + math; // 총점
let avg = total / 3; // 평균
// 95점 이상 : A
// 80점 이상 : B
// 70 : C
// 60 : D
// 나머지 : F
console.log(`총점 : ${total}`);
console.log(`평균 : ${avg}`);
if (avg >= 95) {
  console.log(`점수는 A입니다.`);
} else if (avg >= 80) {
  console.log(`점수는 B입니다.`);
} else if (avg >= 70) {
  console.log(`점수는 C입니다.`);
} else if (avg >= 60) {
  console.log(`점수는 D입니다.`);
} else {
  console.log(`점수는 F입니다.`);
}
