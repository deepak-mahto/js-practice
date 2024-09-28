function isPalindrome(S) {
  let str = "";
  for (let i = S.length - 1; i >= 0; i--) {
    str += S[i];
  }
  if (S === str) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("javascript"));
