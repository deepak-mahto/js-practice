function reverseString(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
const str = "development";
const result = reverseString(str);
console.log(result);
