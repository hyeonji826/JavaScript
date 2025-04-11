const user = [1, "apple", "김사과", 20, "서울 서초구"];
console.log(user);
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
console.log(user[3]);
console.log(user[4]);
console.log(user[5]); // 없는 요소를 부르면 그 자리에 undefined가 채워진다.

user[7] = "female";
console.log(user);

//const의 값을 바꾼것이 아니라 배열의 요소를 바꾼 것
user[4] = "서울 강남구";
console.log(user);
console.log(user.length);

for (let i = 0; i < user.lengh; i++) {
  console.log(user[i]);
}

console.log("------------");
//push() : 배열에 요소 추가
user.push("ISTJ");
console.log(user);

// pop() : 배열의 마지막 인덱스 번호에 있는 값을 제거 -> 왼쪽 변수에 담아줌
let temp = user.pop();
console.log(user);
console.log(temp);

// shift() : 배열의 첫번째 인덱스 번호에 있는 값을 제거 -> 왼쪽 변수에 담아줌
temp = user.shift();
console.log(user);
console.log(temp);

// concat () : 두 배열의 요소를 합침
const profile = ["A형", "ISTJ"];
result = user.concat(profile);
console.log(result);

// join() : 배열의 각 요소 사이에 원하는 문자를 삽입
// 배열 -> string(=문자열) 로 바뀜
result = user.join("🎁");
console.log(result);
console.log(typeof result);

// sort() : 배열의 요소를 오름차순
// 아스키 코드 기반으로 오름차순
const arr = ["apple", "banana", "Apple", "orange", "melon", 1, 5, 3];
arr.sort();
console.log(arr);

// reverse() : 배열을 역순으로 재배치
arr.reverse();
console.log(arr);
