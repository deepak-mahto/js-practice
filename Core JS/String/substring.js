function substring(str, l, r) {
  let newString = str.substring(l, ++r);
  return newString;
}

console.log(substring("deepakkumar", 0, 6));
