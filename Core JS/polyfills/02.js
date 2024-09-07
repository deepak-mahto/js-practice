// return only details of those who scored more than 60 marks

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

// const studentsDetails = students.filter((student) => {
//   return student.marks > 60 ? true : false;
// });

// console.log(studentsDetails);

function studentsDetails(students) {
  let studentsMarksMoreThan60 = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 60) {
      studentsMarksMoreThan60.push(students[i]);
    }
  }
  return studentsMarksMoreThan60;
}

const result = studentsDetails(students);
console.log(result);
