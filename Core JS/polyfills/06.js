// return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

let students = [
  {
    name: "tom",
    roll: 23,
    marks: 98,
  },
  {
    name: "winston",
    roll: 22,
    marks: 41,
  },
  {
    name: "thomas",
    roll: 13,
    marks: 90,
  },
  {
    name: "chuck",
    roll: 25,
    marks: 35,
  },
];

// const totalMarks = students
//   .map((student) => {
//     if (student.marks < 60) {
//       student.marks += 20;
//     }
//     return student;
//   })
//   .filter((student) => student.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);

function totalMarks(students) {
  let newArr = [];
  let totalMarks = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 60) {
      students[i].marks += 20;
      newArr.push(students[i]);
    } else {
      newArr.push(students[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].marks > 60) {
      totalMarks += newArr[i].marks;
    }
  }
  return totalMarks;
}

console.log(totalMarks(students));
