// Output

const user = {
  name: "charan",
  getName() {
    console.log(this.name);
  },
};

setTimeout(function () {
  user.getName();
}, 1000);
