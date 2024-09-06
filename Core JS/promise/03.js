// promises
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = false;
    if (result) resolve("promise resolved");
    else
      reject(new Error("something went wrong, promise could not get resolved"));
  }, 3000);
});

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
