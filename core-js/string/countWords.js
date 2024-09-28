function countWords(str) {
  let count = 0;
  let len = str.length;
  for (let i = 0; i <= len; i++) {
    if (str[i] === " " || i === len - 1) {
      count += 1;
    }
  }
  return count;
}

console.log(countWords("JavaScript problem-solving solutions"));
