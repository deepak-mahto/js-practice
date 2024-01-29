function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (let char of str) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }
  return result;
}
const string = "The quick brown fox jumps over the lazy dog";
const stringWithNoVowels = removeVowels(string);
console.log(stringWithNoVowels);
