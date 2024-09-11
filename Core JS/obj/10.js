const user = {
  userName: "charan",
  level: 19,
  health: 22,
};

const string = JSON.stringify(user, ["level", "health"]);
console.log(string);
