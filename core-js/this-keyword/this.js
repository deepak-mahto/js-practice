// "this" keyword in js (Implicit Binding)
// Explain this keyword

const user = {
  firstName: "John",
  getName() {
    const firstName = "Tom";
    return this.firstName;
  },
};
console.log(user.getName());
