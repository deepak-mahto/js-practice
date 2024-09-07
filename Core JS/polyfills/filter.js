Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const arr = [23, 34, 45, 45, 4, 6, 8];
const even = arr.myFilter((n, i, arr) => {
  return n % 2 === 0 ? true : false;
});

console.log(even);
