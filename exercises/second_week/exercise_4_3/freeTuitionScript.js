function qualifyFunction() {
  let age = document.getElementById("years").value;
  if (
    (age >= 18 && document.getElementById("title").checked) ||
    (age >= 18 && document.getElementById("unemployment").checked)
  ) {
    alert("✔️ The student qualifies for an scholarship ✔️");
  } else {
    alert("✖️ The student does not qualify for an scholarship ✖️");
  }
}
