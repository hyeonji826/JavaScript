// const numbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = numbers;
// //  rest만 배열로 저장

// console.log(first);
// console.log(second);
// console.log(rest);

// of 으로 인덱스가 아니라 값을 전달
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40, 50, 60));

const user ={
    name : '김사과',
    age:20,
    city:'서울'
}
const {name,...rest} =user
console.log(name)
console.log(rest)