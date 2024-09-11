function countOccurences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}

const string = "deepak";
const char = "e";

const result = countOccurences(string, char);
console.log(result);
