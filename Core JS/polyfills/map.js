// polyfill for map()

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const arr = [2, 3, 4, 5, 6];

const newArr = arr.myMap((n) => {
  return n * 2;
});

console.log(newArr);
