function abc(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("suceess");
    } else {
      reject("error");
    }
  });
}

const promise = abc(true);

promise
  .then(function (data) {
    console.log(data);
    return abc(false);
  })
  .catch(function (err) {
    console.log(err);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
  });
