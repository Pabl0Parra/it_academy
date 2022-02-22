function findClassAvg() {
  let numberStudents = parseInt(document.getElementById("size").value);
  let grades = [];
  let sumGrades = Number("");
  let classAvg;

  for (let i = 0; i < numberStudents; i++) {
    grades.push(parseInt(prompt("Enter the student's grade: ")));
    sumGrades += parseInt(grades[i]);
  }

  classAvg = sumGrades / numberStudents;

  if (classAvg < 5) {
    document.getElementById("result").innerHTML =
      "The class average grade is failed! Student should study more & ask questions in class";
  }
  if (classAvg > 5 && classAvg < 7) {
    document.getElementById("result").innerHTML =
      "The class average is good, but students should improve their personal work";
  }
  if (classAvg > 7) {
    document.getElementById("result").innerHTML =
      "Congratulations! The class average grade is great! Keep up the good work!";
  }
}
