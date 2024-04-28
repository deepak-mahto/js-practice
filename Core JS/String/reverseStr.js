function reverseString(s) {
  let newS = "";
  for (let i = s.length - 1; i >= 0; i--) {
    newS += s[i];
  }
  return newS;
}

console.log(reverseString("developer"));