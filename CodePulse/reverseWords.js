const str = "react is a library";
function reverseWords(str) {
  let reversedStr = "";
  const arrOfWords = str.split(" ");
  for (let i = 0; i < arrOfWords.length; i++) {
    let reversedElement = arrOfWords[i].split("").reverse().join("");
    reversedStr += reversedElement + " ";
  }
  return reversedStr;
}
const reversedSentance = reverseWords(str);
console.log(reversedSentance);
