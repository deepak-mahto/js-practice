// Solution 1
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator!");
  }
  return result;
}

const num1 = 8;
const num2 = 12;
const operator = "+";

const result = calculator(num1, num2, operator);
console.log(result);

// Solution 2
function calculator(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 + num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    throw new Error("Invalid operator!");
  }
  return result;
}

const num1 = 8;
const num2 = 12;
const operator = "+";

const result = calculator(num1, num2, operator);
console.log(result);
