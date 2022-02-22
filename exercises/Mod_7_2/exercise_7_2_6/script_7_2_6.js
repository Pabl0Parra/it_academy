function isPrime() {
  const NUM = parseInt(document.getElementById("userInput").value);
  let i = 2;
  while (NUM % i !== 0 && i < NUM / 2) {
    i++;
  }
  if (NUM % i !== 0) {
    document.write(`Exactly! ${NUM} is a prime number. Game over!`);
  } else {
    alert("Try again!");
    document.getElementById(
      "display"
    ).innerHTML = `Try again, ${NUM} is not a prime number`;
  }
}
