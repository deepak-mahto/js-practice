// What is the output?

console.log("start");

function fn() {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
}

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
