for (let i = 1; i <= 5; i++) {
  console.log(`현재 숫자 : ${i}번째`);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(`현재숫자:${i}`);
}

console.log("---- for문을 이용한 구구단 ----");
for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} X ${i} =${dan * i}`);
  }
  console.log(`----------`);
}

console.log("---- while문을 이용한 구구단 ----");
let dan = 2;
while (dan <= 9) {
  let i = 1;
  while (i <= 9) {
    console.log(`${dan} x ${i} = ${dan * i}`);
    i++;
  }
  console.log("----------");
  dan++;
}
