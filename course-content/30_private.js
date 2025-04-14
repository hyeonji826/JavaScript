class User {
  #password = ""; //아무것도 없다.

  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }
  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("apple", "1111");

console.log(user.userid);
console.log(user.checkPassword("1111")); // True
console.log(user.checkPassword("1112")); // False
console.log(user.#password);

// 유저 객체의 #password와는 다른것이고 password라는 새로운 속성을 만든 것이다.
// user.password = '1234'  
