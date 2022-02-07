function calculate(button) {
  // button is the event we are calling
  let num1 = +document.getElementById("num1").value; // "+", it fixes 1 + 1 = 11 (it converts strings to numbers)
  let num2 = +document.getElementById("num2").value;
  let operator = button.value; // button.value brings the operator selected
  switch (operator) {
    case "+":
      document.getElementById("result").value = num1 + num2;
      break;
    case "-":
      document.getElementById("result").value = num1 - num2;
      break;
    case "*":
      document.getElementById("result").value = num1 * num2;
      break;
    case "/":
      document.getElementById("result").value = num1 / num2;
      break;
    default:
  }
}
