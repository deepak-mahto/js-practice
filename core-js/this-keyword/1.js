// Output

function makeUser() {
  return {
    name: "deepak",
    ref: this,
  };
}

const user = makeUser();
console.log(user.ref.name);
