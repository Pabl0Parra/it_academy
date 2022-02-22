function isEven() {
  const USERNUMBER = parseInt(document.getElementById("userInput").value);

  const RESULT = USERNUMBER % 2 == 0 ? "even" : "odd";

  document.getElementById(
    "showResult"
  ).innerText = `The number you've entered is ${RESULT}.`;
}
