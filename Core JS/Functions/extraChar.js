function extraChar(s1, s2) {
  let m1 = new Array(256);

  for (let i = 0; i < 256; i++) m1[i] = 0;

  for (let i = 0; i < s2.length; i++) m1[s2[i].charCodeAt(0)]++;

  for (let i = 0; i < s1.length; i++) m1[s1[i].charCodeAt(0)]--;

  for (let i = 0; i < m1.length; i++) {
    if (m1[i] == 1) return String.fromCharCode(i);
  }
  return Number.MIN_VALUE;
}

console.log(extraChar("abcd", "abcde"));
