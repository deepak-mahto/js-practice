class Solution {
  arraySortedOrNot(arr, n) {
    for (let i = 0; i < n; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
}

const sortedOrNot = new Solution();
console.log(sortedOrNot.arraySortedOrNot([23, 45, 23, 45, 34], 5));
