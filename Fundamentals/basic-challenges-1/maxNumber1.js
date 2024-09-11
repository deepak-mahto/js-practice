function maxNumber(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
const arr = [22, 45, 35, 23, 44, 34, 34, 90, 90];

const result = maxNumber(arr);
console.log(result);
