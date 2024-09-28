function printPrimeFactorization(n) {
  let factors = "";
  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      n = n / i;
      factors += i + " ";
    } else {
      i++;
    }
  }
  return factors;
}

let number = 350;
console.log(printPrimeFactorization(number));
