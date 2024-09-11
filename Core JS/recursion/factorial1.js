const factorial = (num) =>
  num === 0 || num === 1 ? num : num * factorial(num - 1);

const num = 3;
const result = factorial(num);
console.log(result);
