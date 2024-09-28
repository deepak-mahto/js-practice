// synchronous vs asynchronous code

// sync
console.log("start");

let c = 0;
for (let i = 0; i < 10000; i++) {
  c++;
}
console.log(c);

console.log("end");

console.log("--------------");

// async code

console.log("start");

setTimeout(() => {
  let c = 0;
  for (let i = 0; i < 10000; i++) {
    c++;
  }
  console.log(c);
}, 3000);

console.log("end");
