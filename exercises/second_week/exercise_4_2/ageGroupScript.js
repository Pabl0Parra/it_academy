function ageGroupFunction() {
  let age = document.getElementById("years").value;
  if (age <= 5 && age <= 6) {
    alert("Preescolar");
  } else if (age >= 6 && age <= 11) {
    alert("Primaria");
  } else if (age >= 12 && age <= 15) {
    alert("ESO");
  } else if (age >= 16 && age <= 17) {
    alert("Bachillerato");
  } else if (age >= 18) {
    alert("FP o Universidad");
  }
}
