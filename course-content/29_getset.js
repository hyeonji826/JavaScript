class User {
  constructor(name) {
    this._name = name;
  }
  // this._에서 언더바를 붙여 get 함수와 구분짓는다.

  // getter
  get name() {
    return this._name;
  }
  // setter
  set name(newName) {
    if (newName.length < 2) {
      console.log("이름은 두 글자 이상이어야 합니다.");
    } else {
      this._name = newName;
    }
  }
}

const user = new User("김사과");
console.log(user._name);
console.log(user.name); // getter

// 값을 바꾸고싶을 때 --> setter
user.name = "반";
user.name = "반하나";

// getter
console.log(user.name);
