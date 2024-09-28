// No recursion
function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

const result = power(2, 4);
console.log(result);
