function factorial(num) {
  // Base case
  if (num === 0 || num === 1) {
    return 1;
  }

  // Recursive case
  return num * factorial(num - 1);
}

const num = 5;
const result = factorial(num);
console.log(result);
