const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
const str = "Hello";
const result = reverseString(str);
console.log(result);
