function titleCase(str) {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
const str = "Until you've built a great product, almost nothing else matters";
const result = titleCase(str);
console.log(result);
