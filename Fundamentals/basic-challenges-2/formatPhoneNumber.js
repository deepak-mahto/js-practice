function formatPhoneNumber(numbers) {
  const areaCode = numbers.slice(0, 3).join("");
  const prefix = numbers.slice(3, 6).join("");
  const lineNumbers = numbers.slice(6).join("");

  return `(${areaCode}) ${prefix}-${lineNumbers}`;
}

const result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result);
