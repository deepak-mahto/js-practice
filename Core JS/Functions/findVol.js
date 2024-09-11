class Solution {
  cube(a) {
    return a * a * a;
  }
  rectangular(l, b, h) {
    return l * b * h;
  }
}

const cubicalBox = new Solution();
const rectangularBox = new Solution();

console.log(cubicalBox.cube(2));
console.log(rectangularBox.rectangular(8, 6, 4));
