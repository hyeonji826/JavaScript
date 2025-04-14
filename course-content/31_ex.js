class Account {
  static accountCount = 0;
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
    Account.accountCount++;
  }
  get balance() {
    return this.#balance;
  }

  set balance(value) {
    console.log("직접 잔액을 설정할 수 없습니다.");
  }
  // 입금
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner}님 ${amount}원 입금되었습니다.`);
    }
  }
  //  출금
  withdraw(amount) {
    if (amount <= this.balance) {
      this.#balance -= amount;
      console.log(`${this.owner}님 ${amount}원 출금되었습니다.`);
    } else {
      console.log("잔액이 부족합니다.");
    }
  }
  static getAccountCount() {
    return `총 계좌수 : ${Account.accountCount}`;
  }
}

const a1 = new Account("김사과");
a1.deposit(1000);
console.log(a1.balance); //getter의 balance 보는 방법
a1.balance = 5000; // setter 발동(잔액 설정을 임의대로 못하게)

a1.withdraw(300);

const a2 = new Account("반하나");
a2.deposit(2000);
console.log(a2.balance);

console.log(Account.getAccountCount());
