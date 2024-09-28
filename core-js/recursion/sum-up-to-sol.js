function sumUpTo(num) {
  // Base case
  if (num === 1) {
    return 1;
  }

  // Recursive case
  return num + sumUpTo(num - 1);
}

const num = 10;
const result = sumUpTo(num);
console.log(result);
