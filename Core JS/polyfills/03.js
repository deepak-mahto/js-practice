// students whose marks more than 60 and roll number greater than 15

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

// const filteredStudents = students.filter(
//   (student) => student.marks > 60 && student.roll > 15
// );

// console.log(filteredStudents);

function studentsDetails(students) {
  let filteredStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 60 && students[i].roll > 15) {
      filteredStudents.push(students[i]);
    }
  }
  return filteredStudents;
}

console.log(studentsDetails(students));
