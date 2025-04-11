for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;  // i가 3을 가리킬 때 결과를 내지않고 다시 for문으로 돌아간다.
  console.log(`i값 : ${i}`);
}
