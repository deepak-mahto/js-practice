function isPanagram(str) {
  let arr = new Array(26).fill(false);
  if (str.length < 26) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    let x = str.charAt(i);
    if (x >= "a" && x <= "z") {
      arr[x.charCodeAt(0) - "a".charCodeAt(0)] = true;
    } else if (x >= "A" && x <= "Z") {
      arr[x.charCodeAt(0) - "A".charCodeAt(0)] = true;
    }
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] === false) {
      return false;
    }
  }
  return true;
}

console.log(isPanagram("zabdefghijklmnopqrstuvwxyc"));
