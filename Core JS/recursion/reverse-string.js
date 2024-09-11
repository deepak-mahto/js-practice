function reverseString(str) {
  // Base case
  if (str === "") {
    return "";
  } else {
    // Recursive case
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

const str = "deepak";
const result = reverseString(str);
console.log(result);
