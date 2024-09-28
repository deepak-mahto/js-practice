function reverseString(str) {
  return str.split("").reverse().join("");
}
const str = "development";
const result = reverseString(str);
console.log(result);
