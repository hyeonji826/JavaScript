/* 
const age = 15;
const message = age >= 18 ? "True = 성인입니다" : "False = 미성년자입니다.";
console.log(message); 
*/

const score = 85;
const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
console.log(`당신의 성적은 ${score}점이고 ${grade}입니다.`);
