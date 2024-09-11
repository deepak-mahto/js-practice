function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
const arr = [23, 34, 45, 45, 23, 22, 22, 11, 33, 11];
const result = removeDuplicates(arr);
console.log(result);
