// return only names of students who scoored more than 60

let students = [
  {
    name: "tom",
    roll: 23,
    marks: 98,
  },
  {
    name: "winston",
    roll: 22,
    marks: 59,
  },
  {
    name: "thomas",
    roll: 13,
    marks: 90,
  },
  {
    name: "chuck",
    roll: 25,
    marks: 55,
  },
];

// const avgStudents = students
//   .filter((student) => student.marks > 60)
//   .map((student) => student.name);
// console.log(avgStudents);

function names(students) {
  let names = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 60) {
      names.push(students[i].name);
    }
  }
  return names;
}

console.log(names(students));
