console.log("start");

function impAct(username, callback) {
  setTimeout(() => {
    const mesage = `hi ${username}`;
    callback(mesage);
  }, 3000);
}

impAct("deepak", (result) => {
  console.log(result);
});

console.log("stop");
