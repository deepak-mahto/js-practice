function job() {
  return new Promise((resolve, reject) => {
    reject();
  });
}

const promise = job();

promise
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .then(function () {
    console.log("success 3");
  })
  .catch(function () {
    console.log("err 1");
  })
  .then(function () {
    console.log("success 4");
  })
  .then(function () {
    console.log("success 5");
  })
  .catch(function () {
    console.log("err 2");
  });
