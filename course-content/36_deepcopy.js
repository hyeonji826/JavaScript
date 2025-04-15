function deepCopy(value) {
  // 원시값은 그대로 반환
  if (typeof value !== "object" || value === null) {
    return value;
  }
  // 흐름쓰기 :  deepCopy 함수를 만들고 그 안에 value 값을 준다. 이때 value의 타입이 'object'나 결측치가 아닐 경우 value 값을 반환한다.

  // 배열일 경우
  if (Array.isArray(value)) {
    const result = [];
    for (let i = 0; i < value.length; i++) {
      result[i] = deepCopy(value[i]); // 재귀함수
    }
    return result;
  }
  // 흐름쓰기 : 배열일 경우 (i=index) i=0부터 시작해서 value의 길이의 i-1까지 1씩 증가를 반복하고 결과는 deepCopy함수의 value 인덱스의 값을 반환

  // 객체일 경우
  const result = {};
  for (let key in value) {
    result[key] = deepCopy(value[key]);
  }
  return result;
}
// 흐름쓰기 :  result 값이 객체일 경우 [key]안에 value 값을 넣는다.

const original = {
  name: "오렌지",
  scores: [90, 80, 100],
  address: {
    city: "서울",
    zip: "12345",
  },
};
// 흐름쓰기 : original변수 에다가 이름, 점수, 주소 를 넣는다

const copy = deepCopy(original);
copy.name = "김사과";
copy.scores[0] = 70;
copy.address.city = "부산";
// 흐름쓰기 : copy변수에 original속성을 갖고있는 함수를 대입(이떄 original변수는 deepCopy함수의 기능을 모두 이어받는다.)

console.log(original.name);
console.log(original.scores[0]);
console.log(original.address.city);
