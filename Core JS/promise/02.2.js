// callbacks

console.log("start");

function impAct(username, callback) {
  setTimeout(() => {
    const mesage = `hi ${username}`;
    callback(mesage);
  }, 3000);
}

function callback(result) {
  console.log(result);
}

const username = "deepak";

impAct(username, callback);

console.log("stop");
