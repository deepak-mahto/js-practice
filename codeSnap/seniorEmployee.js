const employees = [
  {
    name: "deepak",
    numOfyear: 5,
  },
  {
    name: "ram",
    numOfyear: 4,
  },
  {
    name: "mahesh",
    numOfyear: 3,
  },
  {
    name: "allu",
    numOfyear: 2,
  },
  {
    name: "yash",
    numOfyear: 6,
  },
];

const result = employees
  .filter((employee) => employee.numOfyear > 3)
  .map((employee) => employee.name);
console.log(result);
