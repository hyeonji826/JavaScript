// 1. 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위,바위,보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
// 들을 비교해서 승/패/무 결과를 출력

let game = ["가위", "바위", "보"];
let userRandomNumber = Math.floor(Math.random() * game.length);
let compRandomNumber = Math.floor(Math.random() * game.length);
console.log(userRandomNumber);
console.log(compRandomNumber);

if (userRandomNumber == 1) {
  if (compRandomNumber == 1) {
    console.log(`user : 가위, computer : 가위, 결과: 무승부!!`);
  } else if (compRandomNumber == 2) {
    console.log(`user : 가위, computer : 바위, 결과: 컴퓨터 승리!!`);
  } else {
    console.log(`user : 가위, computer : 보 결과: 유저 승리!!`);
  }
} else if (userRandomNumber == 2) {
  if (compRandomNumber == 1) {
    console.log(`user : 바위, computer : 가위, 결과: 유저 승리!!`);
  } else if (compRandomNumber == 2) {
    console.log(`user : 바위, computer : 바위, 결과: 무승부!!`);
  } else {
    console.log(`user : 바위, computer : 보 결과: 컴퓨터 승리!!`);
  }
} else {
  if (compRandomNumber == 1) {
    console.log(`user : 보, computer : 가위, 결과: 컴퓨터 승리!!`);
  } else if (compRandomNumber == 2) {
    console.log(`user : 보, computer : 바위, 결과: 유저 승리!!`);
  } else {
    console.log(`user : 바위, computer : 보 결과: 무승부!!`);
  }
}

// 2. 로또번호 생성기
// 1~45까지 숫자 중 중복없이 6개를 추출  ->logic 으로 중복제어
// 작은 수를 앞으로 정렬(오름차순)

const lotto = [];
while (lotto.length < 6) {
  const randomNumber = Math.floor(Math.random() * 45) + 1;
  if (!lotto.includes(randomNumber)) {
    lotto.push(randomNumber);
  }
}
// lotto.sort()
console.log(`로또 번호 : ${lotto.sort()}`);
