let string = "Deepak";
for (let i = 0; i < string.length; i++) {
  for (let j = i + 1; j <= string.length; j++) {
    console.log(string.slice(i, j));
  }
}
