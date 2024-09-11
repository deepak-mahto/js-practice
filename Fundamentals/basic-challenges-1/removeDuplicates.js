function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}
const arr = [23, 34, 45, 45, 23, 22, 22, 11, 33, 11];
const result = removeDuplicates(arr);
console.log(result);
