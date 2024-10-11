// "this" keyword in js (Implicit Binding)
// Explain this keyword

this.a = 24;
console.log(this);
console.log(typeof this);
console.log(this.a);

function getParam() {
  const obj = {
    a: 23,
    fn() {
      console.log(this);
      console.log(this.a);
    },
    childObj: {
      child: 11,
      getDetails() {
        console.log(`${this.a} and ${this.child}`);
      },
    },
  };
  obj.fn();
  console.log(this.a);
  console.log(this);
}

getParam();
