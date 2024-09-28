const property = "firstName";
const name = "deepak";

const user = {
  [property]: name, //using the property dynamically
  lastName: "kumar",
};

console.log(user);
console.log(user.firstName);
