// Question 1 - sum(2)(3)(4)

function sum(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

const answer = sum(2)(3)(4);
console.log(answer);

