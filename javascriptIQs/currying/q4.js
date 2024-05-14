// partial Function

function simplify(a) {
  return function (b, c) {
    return a + b + c;
  };
}

const x = simplify(12);
console.log(x(4, 5));

// or

console.log(simplify(12)(4, 5));

// currying function

function a(n1) {
  return function (n2) {
    return function (n3) {
      return n1 + n2 + n3;
    };
  };
}

const result = a(5)(4)(6);
console.log(result);
