function arrayIntersection(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

const arr1 = [4, 5, 6, 4, 6, 3, 2];
const arr2 = [5, 6, 7, 3, 2, 4, 1];

const result = arrayIntersection(arr1, arr2);
console.log(result); // [4, 5, 6, 3, 2]
