const str = "the elegent implementation is a function";

function sortTextByWordLength(str) {
  const arrOfWords = str.split(" ");
  const sortedArr = arrOfWords.sort((a, b) => a.length - b.length);
  return sortedArr.join(" ");
}
const result = sortTextByWordLength(str);
console.log(result);
