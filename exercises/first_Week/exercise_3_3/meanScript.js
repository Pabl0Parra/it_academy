function myAverageFunction() {
  let firstGrade = parseInt(document.getElementById("txt1").value);
  let secondGrade = parseInt(document.getElementById("txt2").value);
  let thirdGrade = parseInt(document.getElementById("txt3").value);
  let finalGrade = parseInt((firstGrade + secondGrade + thirdGrade) / 3);
  const elementfinalGrade = parseInt(
    (document.getElementById("average").innerHTML =
      "The average grade is " + finalGrade + ".")
  );
}
