let studentsList = [];

let counterSelectedStudents = 1;

function qualifyStudent() {
  const userName = document.getElementById("userName").value;
  const userAge = document.getElementById("userAge").value;
  const universityTitle = document.getElementById("universityTitle").value;
  const unemployed = document.getElementById("unemployed").value;
  const selectedStudent = document.getElementById("selectedStudent");
  const messagePrint = document.getElementById("messagePrint");

  let content = `Participants: ${counterSelectedStudents}\nThe five chosen students are:\n`;

  if (checkConditions(userAge, universityTitle, unemployed)) {
    studentsList.push(userName);

    counterSelectedStudents++;

    selectedStudent.innerText = `Student number ${counterSelectedStudents}`;
  } else {
    counterSelectedStudents++;

    selectedStudent.innerText = `Student number ${counterSelectedStudents}`;
  }

  if (studentsList.length === 5) {
    alert(
      "Ok, we now have the names of the five chosen ones! Please press click to show the names of the lucky ones!"
    );

    for (const people of studentsList) {
      content += people + "\n";
    }

    document.getElementById("messagePrint").textContent = content;

    rebootProgram(selectedStudent);
  }
}

function checkConditions(userAge, universityTitle, unemployed) {
  if (
    userAge >= 18 &&
    userAge <= 120 &&
    (universityTitle === "yes" || unemployed === "yes")
  ) {
    return true;
  }
  return false;
}

function rebootProgram(selectedStudent) {
  studentsList = [];
  counterSelectedStudents = 1;

  selectedStudent.innerText = `Student ${counterSelectedStudents}`;
}
