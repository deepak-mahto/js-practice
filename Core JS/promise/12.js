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
    return abc(true);
  })
  .then(function (data) {
    if (data !== "Victory") {
      throw "Defeat";
    }
    return abc(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
    return abc(false);
  })
  .then(function (data) {
    console.log(data);
    return abc(true);
  })
  .catch(function (err) {
    console.log(err);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("success", data.message);
  });
