function findFirstNonRepeatingCharacter(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
const str = "programming";
const result = findFirstNonRepeatingCharacter(str);
console.log(result);
