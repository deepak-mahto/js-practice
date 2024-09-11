function sum(a) {
  return function (b) {
    if (b) return a + b;
    return a;
  };
}

const result = sum(5)();
console.log(result);
