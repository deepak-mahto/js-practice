const fibonacci = (n) => (n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2));

const n = 15;
const result = fibonacci(n);
console.log(result);
