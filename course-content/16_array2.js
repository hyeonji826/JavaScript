// Case 1
let fruits = ["사과", "바나나", "오렌지"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("-----------------");

// Case 2 - for ... of
for (let fruit of fruits) {
  console.log(fruit);
}
console.log("-----------------");

// Case 3 - forEach() : 배열 요소의 개수만큼 반복
// function 함수명(없으면 익명함수처리) (x1, x2)
// parameter 1 -> x1 , parameter 1's index -> x2
fruits.forEach(function (fruit, index) {
  console.log(`${index}번째 과일: ${fruit}`);
});
