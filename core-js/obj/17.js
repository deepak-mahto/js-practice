const value = { number: 12 };

const multiply = (x = { ...value }) => {
  return (x.number *= 2);
};

const result = multiply();
const result2 = multiply(value);
const result3 = multiply(value);
console.log(result); // 24
console.log(result2); //24
console.log(result3); //48
