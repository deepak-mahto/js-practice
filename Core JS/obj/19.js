// deep copy using assign method

const user = {
  name: "tom",
  age: 23,
};

// const objClone = Object.assign({}, user);
const objClone = JSON.parse(JSON.stringify(user));
// console.log(objClone);
objClone.name = "hardy";

console.log(objClone);

console.log(user); // original object not changed
