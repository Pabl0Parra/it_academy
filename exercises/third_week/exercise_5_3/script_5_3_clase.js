function guessNumber() {
  let correctNumber;
  let random = Math.floor(Math.random() * 10);

  while (random != correctNumber) {
    let userNumber = parseInt(document.getElementById("inputNumber").value);
    if (userNumber < 0 || userNumber > 10) {
      alert("Invalid number, try again");
    } else {
     (userNumber >= 0 && userNumber <= 10) {
      correctNumber = userNumber;
    }
  }
  document.getElementById(
    "result"
  ).textContent = `Congratulations, number ${correctNumber} was the correct one`;
}
}