function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ");
}
const str = "Until you've built a great product, almost nothing else matters";
const result = titleCase(str);
console.log(result);
