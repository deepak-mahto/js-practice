// function subStringsOfString(input) {
//     let subStrings = [];
//     for (let i = 0; i < input.length; i++) {
//         for (let j = i + 1; j <= input.length; j++) {
//             subStrings.push(input.slice(i, j));
//         }
//     }
//     return subStrings;
// }
// const string = "geeksforgeeks";
// const arrOfSubstrings = subStringsOfString(string);
// console.log(arrOfSubstrings);

// another method

const test = "geeksforgeeks";

String.prototype.subString = function () {
  var subset = [];
  for (var m = 0; m < this.length; m++) {
    for (var n = m + 1; n < this.length + 1; n++) {
      subset.push(this.slice(m, n));
    }
  }
  return subset;
};
console.log(test.subString());