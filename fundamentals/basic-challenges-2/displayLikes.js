function displayLikes(names) {
  const length = names.length;
  if (length === 0) {
    return "No one likes this";
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} likes this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} likes this`;
  }
}

const names = ["name1", "name2", "name3", "name4", "name5", "name6"];
const result = displayLikes(names);
console.log(result);
