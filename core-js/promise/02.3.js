// callback-hell

console.log("start");

function impAct(username, callback) {
  setTimeout(() => {
    const mesage = `hi ${username}`;
    callback(mesage);
  }, 3000);
}

function anotherFunc(anotherUsername, callback) {
  setTimeout(() => {
    const anotherMessage = `hey! ${anotherUsername}`;
    callback(anotherMessage);
  }, 3000);
}

impAct("deepak", (result) => {
  console.log(result);
  anotherFunc("deepak-kumar", (result2) => {
    console.log(result2);
  });
});

console.log("stop");
