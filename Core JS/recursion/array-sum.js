function sumArr(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArr(arr.slice(1));
  }
}
const arr = [1, 2, 3, 4, 5, 6, 7];

const result = sumArr(arr);
console.log(result);
