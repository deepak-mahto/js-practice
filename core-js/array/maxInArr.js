function largest(arr, n) {
  let maximum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }
  return maximum;
}

console.log(largest([23, 45, 56, 67, 88, 22, 99], 7));
