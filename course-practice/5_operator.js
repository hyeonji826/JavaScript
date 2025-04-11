let num = 10;
num++; //11
console.log(num); // 11
++num; // 12
console.log(num); // 12
let result = 0; // 0
result = ++num; // 1
console.log(result); // 1
result = num++; // 13 , ++가 =보다 우선순위가 떨어짐 따라서 13을 먼저 result에 저장하고
console.log(result); // 13
// num =14가 나중에 저장됨 따라서 result = 13 / num = 14 이다(화살표 상상해서 착각하지 않기!)

console.log("-------비트 연산자-------");

// 비트 연산자
//16 8 4 2 1
let a = 23; // 1 0 1 1 1
let b = 14; // 0 1 1 1 0
// 비트 AND : &
console.log(a & b);
// 비트 OR(둘 중 하나라도 1이면 1) : |
console.log(a | b);
// 비트 XOR(OR랑 반대개념) : ^
console.log(a ^ b);
// 비트 NOT : ~
// 이진법의 맨 앞은 부호를 나타내며 0은 양수 1은 음수이다.
// Ex) ~32를 하면 음수값으로 답이 나올 것이다.
console.log(~a);
// 5 -> -5로 만들고 싶다면 ~5 + 1 = -5
console.log(~a + 1);
// Left Shift : 오른쪽에 n개의 0이 연속적으로 붙음
console.log(a << 1);
// Right Shift
console.log(a >> 1);

// 과제 : 왜 아래와 같은 결과가 나올까?
// 생각해보기!
console.log(1.5 + 1.2 == 2.7); //True
console.log(1.2 + 1.1 == 2.3); //True
console.log(1.1 + 0.1 == 1.2); //False

