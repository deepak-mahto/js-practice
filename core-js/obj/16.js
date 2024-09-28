let person = { name: "deepak", age: 22 };
const member = [person];
person = null;
console.log(member); // array of person obj
console.log(person); // null
