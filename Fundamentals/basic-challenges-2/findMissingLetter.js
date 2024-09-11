function findMissingLetter(arr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabets.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabets[startIndex + i]) {
      return alphabets[startIndex + i];
    }
  }
  return "";
}
const arr = ["c", "d", "e", "g", "h"];
const result = findMissingLetter(arr);
console.log(result);
