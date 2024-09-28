function strstr(s, x) {
  let len = s.length;
  for (let i = 0; i < len - x.length + 1; i++) {
    let sub = s.substring(i, i + x.length);
    if (sub === x) {
      return i;
    }
  }
  return -1;
}

console.log(strstr("DeepakKumar", "Kum"));
