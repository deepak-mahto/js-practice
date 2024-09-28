// json.stringify and json.parse

const user = {
  userName: "mohanlal",
  age: 34,
  profession: "lawyer",
};

console.log(user);

// convert it into string object - json.stringify
const strObj = JSON.stringify(user);
console.log(strObj);

// converting back to object - json.parse
console.log(JSON.parse(strObj));

// use case - storing it into local stotage

localStorage.setItem("test", strObj);

// getting the item from local storage and coverting it into obj
console.log(JSON.parse(localStorage.getItem("test")));
