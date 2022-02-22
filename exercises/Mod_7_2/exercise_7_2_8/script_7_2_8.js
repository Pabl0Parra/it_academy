function createFibonacciSequence() {
  const NUMBER = parseInt(document.getElementById("userNumber").value);
  let firstNumber = 0;
  let secondNumber = 1;
  let nextTerm;

  nextTerm = firstNumber + secondNumber;

  let showResult = "0, 1, ";

  for (i = 1; i < NUMBER; i++) {
    nextTerm = secondNumber;
    secondNumber += firstNumber;
    firstNumber = nextTerm;

    showResult += `${nextTerm}, `;
  }
  document.getElementById(
    "display"
  ).innerHTML = `The Fibonacci sequence for ${NUMBER} is ${showResult}`;
}
