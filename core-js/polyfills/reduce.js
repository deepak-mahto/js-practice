Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 4, 56, 7];

const sum = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum);
