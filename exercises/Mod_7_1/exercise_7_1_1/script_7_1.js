function myAverageFunction() {
  let firstGrade = parseInt(document.getElementById("txt1").value);
  let secondGrade = parseInt(document.getElementById("txt2").value);
  let thirdGrade = parseInt(document.getElementById("txt3").value);
  let finalGrade = parseInt((firstGrade + secondGrade + thirdGrade) / 3);

  if (finalGrade < 5) {
    document.getElementById(
      "failed"
    ).innerHTML = `Your final grade is ${finalGrade}. ⚠️⚠️ You have failed the course, you need to retake it!! ⚠️⚠️`;
  }
  if (finalGrade > 5 && finalGrade < 7) {
    document.getElementById(
      "passed"
    ).innerHTML = `Your final grade is ${finalGrade}. 🔥 Congrats!, You've passed the course, but you need to keep on practising!! ✔️"
    `;
  }
  if (finalGrade > 7) {
    document.getElementById(
      "killedIt"
    ).innerHTML = `Your final grade is ${finalGrade}. 🔥🔥 Congrats!, You've passed the course. Go on to the next level!! ✔️✔️`;
  }
}
