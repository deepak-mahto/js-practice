const arr = [24, 53, 67, 23, 45, 33, 22, 11];
const result = arr.reduce((acc, curr) => (curr < 40 ? acc + curr : acc), 0);
console.log(result);
