const func = (function (a) {
  delete a;
  return a;
})(12);

console.log(func);
