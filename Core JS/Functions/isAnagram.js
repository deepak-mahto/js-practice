function isAnagram(a, b) {
  let freq = new Array(26);
  freq.fill(0);

  for (let i = 0; i < a.length; i++) {
    let k = a.charCodeAt(i) - 97;
    freq[k]++;
  }

  for (let i = 0; i < b.length; i++) {
    let k = b.charCodeAt(i) - 97;
    freq[k]--;
  }

  let flag = true;

  for (let i = 0; i < 26; i++) {
    if (freq[i] != 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

console.log(isAnagram("deepak", "kapeed"));
