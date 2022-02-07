function ageCheckFunction() {
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let age = document.getElementById("age").value;
  if (age >= 18) {
    alert(`✔️ ${firstName} ${lastName} is over 18 years old. ✔️`);
  } else {
    alert(`⛔ ${firstName} ${lastName} is under 18 years old. ⛔`);
  }
}
