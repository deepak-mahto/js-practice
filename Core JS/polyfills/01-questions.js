// return only name of students in capital

let students = [
  {
    name: "tom",
    roll: 23,
    marks: 98,
  },
  {
    name: "winston",
    roll: 22,
    marks: 94,
  },
  {
    name: "thomas",
    roll: 13,
    marks: 90,
  },
  {
    name: "chuck",
    roll: 25,
    marks: 99,
  },
];

// const studentsName = students.map((item) => {
//   return item.name.toUpperCase();
// });

// console.log(studentsName);

function studentsName(students) {
  let UpperCase = [];
  for (let i = 0; i < students.length; i++) {
    UpperCase.push(students[i].name.toUpperCase());
  }
  return UpperCase;
}

const studentsNameInUpperCase = studentsName(students);
console.log(studentsNameInUpperCase);
