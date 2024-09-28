function fibonacci(n) {
  // Base case
  if (n < 2) return n;

  //Recursive version
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 10;
const result = fibonacci(n);
console.log(result);
