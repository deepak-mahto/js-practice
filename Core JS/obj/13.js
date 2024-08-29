function getItems(fruitsList, favFruits, ...restArgs) {
  return [...fruitsList, ...restArgs, favFruits];
}

const arr = getItems(
  ["banana", "orange", "grapes"],
  "peers",
  "guava",
  "apple",
  "mango"
);
console.log(arr);
