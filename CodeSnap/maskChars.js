function maskChar(string) {
  let tempString = "";
  let maskchars = "";
  for (let i = 0; i < string.length - 4; i++) {
    tempString += string[i];
  }
  for (let i = string.length - 4; i < string.length; i++) {
    maskchars += "#";
  }
  return tempString + maskchars;
}
const string = "123456789987654321";
const result = maskChar(string);
console.log(result);
