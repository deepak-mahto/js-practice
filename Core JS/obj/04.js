// to get the values of obj

const user = {
  firstName: "deeapk",
  lastName: "kumar",
  address: "India",
  isAddress: true,
};

for (let key in user) {
  console.log(user[key]);
}
