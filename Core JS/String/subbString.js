function sliceString(s) {
  let substring = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[0] || s[i] === s[s.length - 1]) {
      continue;
    } else {
      substring += s[i];
    }
  }
  return substring;
}

console.log(sliceString("webdeveloper"));
