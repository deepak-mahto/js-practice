const user = {
  name: "deepka",
  age: "23",
  "address of deepak": "new delhi",
};

// console.log(user);
console.log(user["address of deepak"]); //access
delete user["address of deepak"]; //delete
console.log(user);
