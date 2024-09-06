// callback-hell

console.log("start");

function impAct(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mesage = `hi ${username}`;
      resolve(mesage);
    }, 3000);
  });
}

function anotherFunc(anotherUsername) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const anotherMessage = `hey! ${anotherUsername}`;
      resolve(anotherMessage);
    }, 3000);
  });
}

impAct("deepak")
  .then((res) => {
    console.log(res);
    return anotherFunc("deepak-kumar");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("stop");
