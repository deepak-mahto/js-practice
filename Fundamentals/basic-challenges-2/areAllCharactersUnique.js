function areAllCharatersUnique(string) {
  const charSet = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charSet.has(char)) {
      return false;
    }
    charSet.add(char);
  }
  return true;
}
const string = "abcdefghi";
const result = areAllCharatersUnique(string);
console.log(result);
