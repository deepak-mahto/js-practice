function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseStr = formattedStr.split("").reverse().join("");
  return formattedStr === reverseStr;
}

const str = "development";
const result = isPalindrome(str);

if (result) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}
