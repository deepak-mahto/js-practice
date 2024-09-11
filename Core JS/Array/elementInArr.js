function search(arr, N, X) {
  for (let i = 0; i < N; i++) {
    if (arr[i] === X) {
      return i;
    }
  }
  return -1;
}
console.log(search([2, 3, 6, 4, 5], 5, 4));
