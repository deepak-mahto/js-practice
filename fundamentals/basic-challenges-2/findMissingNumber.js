function findMissingNumber(arr) {
  if (!arr && arr.length === 0) {
    return undefined;
  }
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
const arr = [1, 2, 3, 4, 5, 7, 8, 9];
const result = findMissingNumber(arr);
console.log(result);
