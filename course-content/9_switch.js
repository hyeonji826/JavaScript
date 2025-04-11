// 값이 하나일 때 여러 경우를 나누는 상황에 적합
/*
switch (값) {
    case 값1 :
        값1일 때 실행할 코드
        break;
    case 값2 :
        값2일 때 실행할 코드
        break ;
    default:
    조건문의 else와 같은 기능
}*/

// let mbti = "ISTJ";

// switch (mbti) {
//   case "ENFP":
//     console.log("열정가득! 사람들과 어울리는 걸 좋아하는 아이디어 뱅크");
//     break;
//   case "INFJ":
//     console.log("조용하지만 깊은 통찰력! 사람들을 도와주는 조용한 리더");
//     break;
//   case "ISTJ":
//     console.log("원칙과 계획을 중시하는 믿음직한 현실주의자!");
//     break;
//   case "ENTJ":
//     console.log("리더쉽이 뛰어나고 목표지향적인 전략가!");
//     break;
//   default:
//     console.log("아직 등록되지 않은 MBTI에요. 다시 확인해주세요!");
// }

// const month = 11;
// // 날짜 if문으로 구분하기 OR 연산자 사용해서!
// if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   console.log(`${month}월의 마지막 일자는 31일입니다.`);
// } else if (month == 2) {
//   console.log(`${month}월의 마지막 일자는 28일입니다.`);
// } else if (month == 4 || month == 6 || month == 9 || month == 11) {
//   console.log(`${month}월의 마지막 일자는 30일입니다.`);
// }

/* Switch로 풀어보기
switch (month) {
  case 1:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 2:
    console.log(`${month}월의 마지막 일자는 28일입니다.`);
    break;
  case 3:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 4:
    console.log(`${month}월의 마지막 일자는 30일입니다.`);
    break;
  case 5:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 6:
    console.log(`${month}월의 마지막 일자는 30일입니다.`);
    break;
  case 7:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 8:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 9:
    console.log(`${month}월의 마지막 일자는 30일입니다.`);
    break;
  case 10:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
  case 11:
    console.log(`${month}월의 마지막 일자는 30일입니다.`);
    break;
  case 12:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;
} 
- break문장은 swicth에 반드시 첨부되야하는것은 아니다.
  만약 break가 없으면 조건에 부합한 case에서는 당연히 실행되고 조건이 부합하진않지만 
  존재하는 다음 case에 적용된다. break가 있을 때까지
*/
const month = 11;
// switch 구문에서 결과값이 동일한 case들을 묶어서 조건문 완성해보기
switch (month) {
  case 1:
  case 3:
  case 5:
  case 8:
  case 10:
  case 12:
    console.log(`${month}월의 마지막 일자는 31일입니다.`);
    break;

  case 2:
    console.log(`${month}월의 마지막 일자는 28일입니다.`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${month}월의 마지막 일자는 30일입니다.`);
    break;
  default:
    console.log(`1월~12월 사이값으로 다시 입력해주세요!`);
}
