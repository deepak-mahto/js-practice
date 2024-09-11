function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "subtract") return a - b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else return "invalid operation";
    };
  };
}

const result = evaluate("divide")(10)(5);
console.log(result);
