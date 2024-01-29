const familyMembers = [
  {
    name: "Narsingrao",
    age: 56,
  },
  {
    name: "Padma",
    age: 52,
  },
  {
    name: "Poonam",
    age: 30,
  },
  {
    name: "Prakash",
    age: 27,
  },
  {
    name: "Ashish",
    age: 50,
  },
  {
    name: "Deepak",
    age: 23,
  },
];

const result = familyMembers.reduce((acc, curr) => acc + curr.age, 0);
const avgAge = result / familyMembers.length;
console.log(avgAge);
