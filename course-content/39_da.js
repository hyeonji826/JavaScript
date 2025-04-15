// const obj = { name: "김사과", age: 20 };
// const { name, age } = obj;
// console.log(name)
// console.log(age)

function display({ name, age, address, job }) {
  console.log(name, age, address, job);
}

const apple = {
  name: "김사과",
  age: 20,
  address: { si: "서울시", gu: "서초구", dong: "양재동" },
};
console.log(apple);
const new_apple = { ...apple, job: "프로그래머" };
console.log(new_apple);
display(new_apple);

// const { pet = "루시" } = new_apple;
// console.log(new_apple);

const { job: hobby } = new_apple;
console.log(new_apple);

const component = {
  name: "Button",
  styles: {
    size: 20,
    color: black,
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(component);
