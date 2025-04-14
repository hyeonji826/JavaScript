class Mathtool {
    constructor(num1, num2) {
        this.num1= num1
        this.num2=num2
    }
  static add(a, b) {    // 무슨 용도? 객체를 생성하지 않고 바로 쓰고싶을 때, --> 많으면 과적합 위험
    return a + b;   // static은 this. 을 사용하지못한다. this.는 생성자로부터 오기때문에 사용할 수 없음.
  }
  subtract(){
    return this.num1- this.num2
  }
}

// tool = new Mathtool();
// console.log(tool.add(10, 3));

console.log(Mathtool.add(10,3))