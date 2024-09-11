const str = "react is a library";
function reversedWordsOfString(str) {
  const arrOfWords = str.split(" ");
  const reversedArrOfWords = arrOfWords.map((word) =>
    word.split("").reverse().join("")
  );
  return reversedArrOfWords.join(" ");
}
const result = reversedWordsOfString(str);
console.log(result);
