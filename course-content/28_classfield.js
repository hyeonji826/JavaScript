class Product {
  name = "상품명 없음";
  price = 0;
  static productName = "컴퓨터";
  static productPrice = "1,000,000원";

  showInfo() {
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
  }
  static showStaticInfo() {
    console.log(`${this.productName}의 가격은 ${this.productPrice}원입니다.`);
  }
}

const p = new Product();
p.showInfo();
// p.showStaticInfo();
Product.showStaticInfo();
