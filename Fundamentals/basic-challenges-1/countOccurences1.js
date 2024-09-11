const countOccurences = (string, char) => {
  const result = string.split(char).length - 1;
  return result;
};

const string = "deepak";
const char = "e";

const result = countOccurences(string, char);
console.log(result);
