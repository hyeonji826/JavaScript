// const obj1 = { name: "김사과", age: 20 };
// const obj2 = Object.assign({}, obj1);

// obj2.name = "오렌지";
// console.log(obj1.name);
// console.log(obj2.name);

// const obj1 = { name: "김사과", age: 20 };
// const obj2 = { ...obj1 };
// obj2.age = 25;
// console.log(obj1.age);
// console.log(obj2.age);

const obj1 = {
  name: "김사과",
  address: { city: "서울" },
};

const obj2 = { ...obj1 };
obj2.address.city = "부산";

// 얕은 복사 후 address는 객체이기 때문에, obj1과 obj2가 같은 주소를 공유
console.log(obj1.address.city);
console.log(obj2.address.city);
