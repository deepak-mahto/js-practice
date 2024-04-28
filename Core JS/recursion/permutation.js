function permutations(str) {
  const result = [];

  if (str === "") {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];

    // Get the rest of the string
    const restOfTheString = str.slice(0, i) + str.slice(i + 1);

    // Get the permutations of the rest of the string
    const subPermutations = permutations(restOfTheString);

    // Loop through each permutaion in subPermutaions
    for (let j = 0; j < subPermutations.length; j++) {
      // Push the first character and the permutations to result
      result.push(firstChar + subPermutations[j]);
    }
  }
  return result;
}

const result = permutations("abc");

console.log(result);
