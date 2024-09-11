function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}

function removeNonAlphaNumeric(str) {
  let formattedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphanumeric(char)) {
      formattedStr += char;
    }
  }
  return formattedStr;
}

function reverseString(formattedStr) {
  let revstr = "";
  for (let i = formattedStr.length - 1; i >= 0; i--) {
    revstr += formattedStr[i];
  }
  return revstr;
}

function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());
  const reverseStr = reverseString(formattedStr);
  return formattedStr === reverseStr;
}

const str = "malayalam";
const result = isPalindrome(str);

if (result) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}
