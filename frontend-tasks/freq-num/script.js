const numbers = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5];

function numberFrequency(arr) {
  let obj = {};
  let maxCount = 0;
  let result = 0;

  // Creating Object that has keys as numbers and value as their number of occurence in the array
  for (let num of arr) {
    if (num in obj) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  }
  // finding the max frequency of a number and the number
  for (let [key, value] of Object.entries(obj)) {
    if (maxCount < value) {
      maxCount = value;
      result = key;
    }
  }
  // finding the max number if multiple number have the same frequency
  for (let [key, value] of Object.entries(obj)) {
    result = maxCount === value && key > result ? key : result;
  }
  return result;
}

console.log(numberFrequency(numbers));
