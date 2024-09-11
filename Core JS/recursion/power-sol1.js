function power(base, exponent) {
  // Base case
  if (exponent === 0) {
    return 1;
  } else {
    // Recursive case
    return base * power(base, exponent - 1);
  }
}
const result = power(2, 4);
console.log(result);
