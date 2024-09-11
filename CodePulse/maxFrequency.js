const arr = [1, 2, 3, 4, 5, 4, 3, 4, 3, 2, 1, 6, 7, 5, 5];

function getNumWithMaxFreq(arr) {
  let maxCount = 0;
  let arrOfMaxFreqKeys = [];
  let maxKey = 0;

  //   get the freq of all numbers
  const numFreqobj = arr.reduce(
    (acc, curr) =>
      curr in acc ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );

  //   get the max freq
  const arrOfKeyValue = Object.entries(numFreqobj);
  for (let [key, value] of arrOfKeyValue) {
    if (maxCount < value) {
      maxCount = value;
    }
  }

  //   get the numbers with max freq
  for (let [key, value] of arrOfKeyValue) {
    if (value === maxCount) {
      arrOfMaxFreqKeys = [...arrOfMaxFreqKeys, key];
    }
  }

  //   get the key with the max freq
  for (let key of arrOfMaxFreqKeys) {
    if (maxKey < key) {
      maxKey = key;
    }
  }
  return maxKey;
}
const result = getNumWithMaxFreq(arr);
console.log(result);
