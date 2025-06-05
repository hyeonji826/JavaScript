const now = new Date();
console.log("현재:", now.toString());
console.log("년:", now.getFullYear());
console.log("월:", now.getMonth() + 1);
console.log("일:", now.getDate());

const nowTime = now.getTime();
const birthTime = birthday.getTime();
const diffDays = Math.floor((nowTime - birthTime) / (1000 * 60 * 60 * 24));
console.log(`태어난 지 ${diffDays}일 지났습니다.`);
