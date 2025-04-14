const proto = {
  greet: function () {
    console.log(`안녕하세요, 저는${this.name}입니다.`);
  },
};

proto.greet();

// 여기서 부터는 Object 공간에 저장함.
const person = Object.create(proto);
person.name = "안가도";
person.age = 32;
person.greet()