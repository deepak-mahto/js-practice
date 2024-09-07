// sum of marks of all students

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

// const totalMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);

function totalMarks(students) {
  let tot = 0;
  for (let i = 0; i < students.length; i++) {
    tot = tot + students[i].marks;
  }
  return tot;
}

console.log(totalMarks(students));
