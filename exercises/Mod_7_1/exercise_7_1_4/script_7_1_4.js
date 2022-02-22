function isNegative() {
  const FIRSTNUMBER = parseInt(document.getElementById("num1").value);
  const SECONDNUMBER = parseInt(document.getElementById("num2").value);

  if (FIRSTNUMBER < 0 && SECONDNUMBER > 0) {
    return alert(`The first number you've entered is negative`);
  }
  if (FIRSTNUMBER > 0 && SECONDNUMBER < 0) {
    return alert(`The second number you've entered is negative`);
  }
  if (FIRSTNUMBER < 0 && SECONDNUMBER < 0) {
    return alert(`Both numbers you've entered are negative`);
  }
  if (FIRSTNUMBER > 0 && SECONDNUMBER > 0) {
    return alert(`Both numbers you've entered are positive`);
  }
}
