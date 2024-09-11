// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2

function multiplayByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

const nums = {
  a: 100,
  b: 200,
  c: 300,
  d: "four hundred",
};

const result = multiplayByTwo(nums);
console.log(result);
