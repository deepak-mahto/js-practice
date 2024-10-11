// "this" keyword in js (Implicit Binding)
// Explain this keyword

class User {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const user1 = new User("john");
user1.getName();
