function alphabets(c1, c2) {
  let ans = "";
  for (let i = c1.charCodeAt(0); i <= c2.charCodeAt(0); i++) {
    ans += String.fromCharCode(i) + " ";
  }
  return ans;
}

console.log(alphabets("h", "x"));
