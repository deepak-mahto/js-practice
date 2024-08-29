// object destructuring

const fullName = {
  firstName: "deepak",
  lastName: "Kumar",
};

fullName.firstName = "ram";
const { firstName: alternateName } = fullName;

console.log(alternateName);

// nested object

const user = {
  name: "deepak",
  age: 22,
  fullName1: {
    firstName: "ram",
    lastName: "charan",
  },
};

const {
  fullName1: { firstName },
} = user;

console.log(firstName);
