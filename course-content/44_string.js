const str1 = "안녕하세요 JavaScript";
const str2 = new String("안녕하세요 JavaScript");

console.log(str1);
console.log(str2);
console.log(str1 == str2);
console.log(str1 === str2);

// length : 문자열의 길이를 저장
console.log(str1.length);

// indexOf() : 특정 문자나 문자열이 처음으로 등장하는 위치를 인덱스로 변환
console.log(str1.indexOf("J"));
console.log(str1.indexOf("Java"));
console.log(str1.indexOf("java")); // -1 = 못찾음

// chatAt() : 특정 문자열에서 전달받은 인덱스에 위치한 문자를 반환
console.log(str1.charAt(7));

// included() : 특정 문자열에서 전달받은 문자열이 포함되어있는지 여부를 반환
console.log(str1.includes("Java"));
console.log(str1.includes("java"));

// substring() : 전달받은 시작 인덱스로부터 종료 인덱스 직전까지의 문자열을 추출
console.log(str1.substring(6)); // 6번부터 끝까지
console.log(str1.substring(6, 10)); // 6부터 9까지

// replace() : 원본 문자열의 일부를 전달받은 문자열로 치환
console.log(str1.replace("안녕하세요", "Hello")); // 안녕하세요 -> Hello로 치환

// split() : 구분자를 기준으로 나눈 후 나뉜 문자열을 하나의 배열에 저장
const str3 = "김사과,오렌지,반하나,이메론,배애리";
const students = str3.split(",");
console.log(students);
for (let i in students) {
  console.log(i, students[i]);
}

// trim(): 문자열의 앞 뒤 공백을 제거
const str4 = "    JavaScript     ";
console.log(`🤍${str4}🤍`);
console.log(`🤍${str4.trim()}🤍`);

// toUpperCase(), toLowerCase() : 문자열을 대,소문자로 변환
console.log(`❤${str.trim().toLowerCase()}❤`)
console.log(`❤${str.trim().toUpperCase()}❤`)
