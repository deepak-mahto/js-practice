const arr = [1, 2, 3, 4, 5, 6];
const result = arr.reduce(
  (acc, curr) =>
    curr % 2 === 0
      ? { ...acc, even: acc.even + curr }
      : { ...acc, odd: acc.odd + curr },
  { even: 0, odd: 0 }
);
console.log(result);
