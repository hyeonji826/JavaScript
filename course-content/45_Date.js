const now = new Date();
console.log("현재: ", now.toString());

console.log("년: ,", now.getFullYear());
console.log("월: ,", now.getMonth() + 1);
console.log("일: ,", now.getDate());

const birthday = new Date(1998, 2, 23);
console.log(`오늘 ${birthday.toDateString()} 생일입니다.`);

const nowTime = now.getTime();
// console.log(nowTime);   // 프로그램 가동 시간 체크때 유용함.
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지남`);
