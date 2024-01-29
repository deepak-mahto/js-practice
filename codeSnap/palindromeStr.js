const str = "malayalam";

function getReversedString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const result = getReversedString(str);
if (result === str) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome.");
}
