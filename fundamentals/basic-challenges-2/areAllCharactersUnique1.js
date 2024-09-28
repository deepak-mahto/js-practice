function areAllCharatersUnique(string) {
  const charCount = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = "true";
  }
  return true;
}
const string = "abcdefghi";
const result = areAllCharatersUnique(string);
console.log(result);
