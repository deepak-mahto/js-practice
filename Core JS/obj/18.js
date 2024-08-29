function changeAgeAndRefererence(person) {
  (person.age = 20),
    (person = {
      name: "mahesh",
      age: 19,
    });
  return person;
}

const personObj = {
  name: "deepak",
  age: 21,
  location: "new delhi",
};

const resultObj = changeAgeAndRefererence(personObj);
console.log(resultObj);
