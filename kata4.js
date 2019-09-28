const instructorWithLongestName = function(instructors) {
  let output = {};
  for (let i = 0; i < instructors.length; i++) {
    let currentLongestName = 0;
    if (instructors[i].name.length > currentLongestName) {
      output = instructors[i];
    }
  }
  return output;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));